import Document, { Html, Head, Main, NextScript } from "next/document";

import Link from "next/link";

import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					{/* Google Adsense */}
					<script
						data-ad-client="ca-pub-6725465146144414"
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					></script>
					{/* Global Site Tag (gtag.js) - Google Analytics */}
					<script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', '${GA_TRACKING_ID}', {
									page_path: window.location.pathname,
								});
							`,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
				<footer className="bg-header text-white shadow w-full">
					<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
						<Link href="/">
							<a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
								<span className="ml-3 font-mono text-4xl">
									BiciMTB
								</span>
							</a>
						</Link>
						<nav className="flex flex-wrap md:w-4/5 items-center md:justify-end justify-center text-base ml:ml-auto">
							<Link href="/ofertas-mtb">
								<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200">
									Recomendaciones MTB
								</a>
							</Link>
							<Link
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.amazon.es/ciclismo/b?ie=UTF8&node=2928487031&linkCode=ll2&tag=devser-21&linkId=10f52c9fe51b33de60abdde7722d9348&language=es_ES&ref_=as_li_ss_tl"
							>
								<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200">
									Bicicleta MTB
								</a>
							</Link>
						</nav>
					</div>
				</footer>
			</Html>
		);
	}
}

export default MyDocument;
