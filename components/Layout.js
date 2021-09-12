import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta name="keywords" content={keywords} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="container mx-auto px-5 my-7">{children}</main>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: "Ofertas MTB, Recomendaciones ciclismo, Recomendaciones MTB",
	keywords:
		"Bicicleta de montaña, Bicicletas de montaña, Ofertas MTB, Recomendaciones MTB, Chollo MTB, Descuento MTB, Ropa MTB, Accesorios MTB, Electrónica MTB, Nutrición MTB, Zapatillas MTB, Componentes MTB, Reparación MTB, Mantenimiento MTB",
	description:
		"En biciMTB puedes encontrar las mejores ofertas y recomendaciones en productos para tu bicicleta de montaña.",
};
