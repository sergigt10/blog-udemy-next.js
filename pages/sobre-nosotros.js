import Layout from "@/components/Layout";

export default function AboutPage() {
	return (
		<Layout title="About DevSer">
			<h1 className="text-3xl font-bold border-b-4 p-3 mt-6">
				¿Quíenes somos?
			</h1>

			<div className="w-full px-8 py-8 mt-6 bg-gray-200 rounded-lg shadow-md">
				<p className="mb-3">
					Somos un blog especializado en el mundo del ciclismo donde
					proponemos productos que pueden ser útiles para disfrutar
					del ciclismo.
				</p>
			</div>
		</Layout>
	);
}
