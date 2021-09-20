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
				<meta charset="utf-8" />
				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				></meta>
				<meta httpEquiv="Content-Language" content="es" />
				<link rel="icon" href="/favicon.ico" />
				<meta name="theme-color" content="#049669" />
			</Head>

			<Header />
			<main className="container mx-auto px-5 my-7">{children}</main>
			<Footer />
		</div>
	);
}

Layout.defaultProps = {
	title: "▷ Las mejores ofertas y recomandaciones para MTB 2021, Garmin 530",
	keywords:
		"Bicicleta de montaña, Bicicletas de montaña, Ofertas MTB, Recomendaciones MTB, Recomendaciones Bicicleta de montaña, Chollo MTB, Chollo Bicicleta de montaña, Chollo MTB 29, Descuento MTB, Ropa MTB, Accesorios MTB, Electrónica MTB, Nutrición MTB, Zapatillas MTB, Componentes MTB, Reparación MTB, Mantenimiento MTB, Consejos MTB, Productos MTB",
	description:
		"En biciMTB encontrarás las mejores ofertas y recomendaciones de productos para tu bicicleta de montaña 2021✅. ¡Entra y compra al mejor precio posible!",
};
