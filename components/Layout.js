import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
	return (
		<div className="mb-10">
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="container mx-auto px-8 my-7">{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: "Ofertas MTB, Noticias ciclismo, Recomendaciones ciclismo",
	keywords: "Blog Ciclismo, MTB, Ofertas MTB",
	description: "Encuentra las mejores ofertas en productos para tu bicicleta",
};
