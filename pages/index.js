import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import { getPosts } from "@/lib/posts";

export default function HomePage({ posts }) {
    return (
        <Layout>
            <h1 className="text-3xl font-bold border-b-4 p-3 mt-6">
                Últimas recomendaciones para tu bicicleta MTB 2021
            </h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.map((post, index) => (
                    <Post key={index} post={post} />
                ))}
            </div>
            <div className="text-center pt-10 pb-3">
                <Link href="https://www.amazon.es/ciclismo/b?ie=UTF8&node=2928487031&linkCode=ll2&tag=devser-21&linkId=10f52c9fe51b33de60abdde7722d9348&language=es_ES&ref_=as_li_ss_tl">
                    <a target="_blank" rel="noopener noreferrer nofollow">
                        <Image
                            src="/images/ads/logo-amazon.png"
                            alt="Amazon Prime"
                            className="w-full rounded"
                            width={439}
                            height={97}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                        />
                    </a>
                </Link>
            </div>
            <Link href="/ofertas-mtb-2021">
                <a className="block bg-header text-center border-4 border-green-800 text-white text-xl rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-black focus:outline-none focus:shadow-outline w-full font-bold">
                    MÁS RECOMENDACIONES
                </a>
            </Link>
            <div className="text-center">
                <Link href="http://www.amazon.es/prime?tag=devser-21">
                    <a target="_blank" rel="noopener noreferrer nofollow">
                        <Image
                            src="/images/ads/index-amazon-prime.jpg"
                            alt="Amazon Prime"
                            className="w-full rounded"
                            width={725}
                            height={87}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                        />
                    </a>
                </Link>
            </div>
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
