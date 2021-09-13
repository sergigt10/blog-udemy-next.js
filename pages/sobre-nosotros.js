import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
	return (
		<Layout title="Sobre biciMTB, Ofertas MTB, Recomendaciones MTB">
			<h1 className="text-3xl font-bold border-b-4 p-3 mt-6">
				¿Quíenes somos?
			</h1>

			<div className="w-full px-8 py-8 mt-6 bg-gray-200 rounded-lg shadow-md">
				<p className="mb-3">
					Somos un blog especializado en el mundo del{" "}
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.amazon.es/ciclismo/b?ie=UTF8&node=2928487031&linkCode=ll2&tag=devser-21&linkId=10f52c9fe51b33de60abdde7722d9348&language=es_ES&ref_=as_li_ss_tl"
					>
						<a>
							<strong>ciclismo MTB</strong>
						</a>
					</Link>{" "}
					donde proponemos productos que puedenser útiles para
					disfrutar del ciclismo.
				</p>
			</div>
		</Layout>
	);
}
