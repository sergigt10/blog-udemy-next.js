import Document, { Html, Head, Main, NextScript } from "next/document";

import { GA_TRACKING_ID } from "../lib/gtag";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="es">
				<Head>
					{/* Google Adsense Tag */}
					<script
						data-ad-client="ca-pub-6725465146144414"
						async
						src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
					></script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
									(adsbygoogle = window.adsbygoogle || []).push({
										google_ad_client: ca-pub-6725465146144414,
										enable_page_level_ads: true
									});
										`,
						}}
					/>
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
			</Html>
		);
	}
}

export default MyDocument;
