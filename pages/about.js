import Layout from "@/components/Layout";

export default function AboutPage() {
	return (
		<Layout title="About DevSer">
			<h1 className="text-3xl font-bold border-b-4 p-3 mt-6">Sobre mi</h1>

			<div className="w-full px-8 py-8 mt-6 bg-gray-200 rounded-lg shadow-md">
				<h3 className="text-2xl mb-5">DevSer Blog</h3>

				<p className="mb-3">
					This is a blog built with Next.js and Markdown
				</p>
			</div>
		</Layout>
	);
}
