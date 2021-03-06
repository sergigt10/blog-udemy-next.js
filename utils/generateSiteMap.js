const fs = require("fs");
const globby = require("globby");

const getDate = new Date().toISOString();

async function generateSiteMap() {
	const pages = await globby([
		"pages/**/*.js",
		"!pages/_*.js",
		"!pages/**/[id].js",
		"!pages/api",
		"!pages/ofertas-mtb-2021/categoria",
		"!pages/ofertas-mtb-2021/pagina",
		"!pages/ofertas-mtb-2021/*.js",
		"!pages/aviso-legal.js",
		"posts/*.md",
	]);

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
	<urlset
      		xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      		xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

          ${pages
				.map((page) => {
					const path = page
						.replace("pages", "")
						.replace("posts", "ofertas-mtb-2021")
						.replace("/404", "ofertas-mtb-2021")
						.replace("/sobre-nosotros", "sobre-nosotros")
						.replace(".js", "")
						.replace(".md", "");

					const priority = path === "/index" ? "1.0" : "0.80";
					const route = path === "/index" ? "" : path;
					return `
                      <url>
                          <loc>${`https://www.bicimtb.es/${route}`}</loc>
						  <lastmod>${getDate}</lastmod>
						  <changefreq>monthly</changefreq>
						  <priority>${priority}</priority>
                      </url>
                  	`;
				})
				.join("")}
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/nutricion</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/electronica</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/mantenimiento</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/componentes</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/accesorios</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/ropa</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/zapatillas</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
				<url>
					<loc>https://www.bicimtb.es/ofertas-mtb-2021/categoria/reparacion</loc>
					<lastmod>2021-09-19T16:33:15.619Z</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.80</priority>
				</url>
      </urlset>
  `;

	fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();
