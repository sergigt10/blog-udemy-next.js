import Link from "next/link";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default function HomePage({ posts }) {
	return (
		<Layout>
			<h1 className="text-3xl font-bold border-b-4 p-3 mt-6">
				Últimas recomendaciones para tu bicicleta MTB
			</h1>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
				{posts.map((post, index) => (
					<Post key={index} post={post} />
				))}
			</div>

			<Link href="/ofertas-mtb">
				<a className="block bg-header text-center border-4 border-green-800 text-white rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-black focus:outline-none focus:shadow-outline w-full font-bold">
					MÁS RECOMENDACIONES
				</a>
			</Link>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			posts: getPosts().slice(0, 9),
		},
	};
}
