import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<Head>
				<title>{title}</title>
				<meta name="keywords" content={keywords} />
				<meta name="description" content={description} />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main className="container mx-auto px-8 my-7">{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: "Bienvenido a DevSer",
	keywords: "development, coding, programming",
	description: "The best info and news about programming",
};
