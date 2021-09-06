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
	title: "Bicicleta de montaña, Ofertas MTB, Recomendaciones MTB",
	keywords:
		"Bicicleta de montaña, Ofertas MTB, Recomendaciones MTB, Chollo MTB, Descuento MTB, Ropa MTB, Accesorios MTB, Electrónica MTB, Nutrición MTB, Zapatillas MTB, Componentes MTB, Reparación MTB, Mantenimiento MTB",
	description:
		"En biciMTB puedes encontrar las mejores ofertas y recomendaciones en productos para tu bicicleta de montaña.",
};
