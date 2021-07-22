const fs = require("fs");
const globby = require("globby");

const getDate = new Date().toISOString();

async function generateSiteMap() {
	const pages = await globby([
		"pages/**/*.js",
		"!pages/_*.js",
		"!pages/**/[id].js",
		"!pages/api",
		"!pages/blog/category",
		"!pages/blog/page",
		"!pages/blog/*.js",
		"posts/*.md",
	]);

	const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
      	<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
	  			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	  			xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
		>
          ${pages
				.map((page) => {
					const path = page
						.replace("pages", "")
						.replace("posts", "blog")
						.replace("/404", "blog")
						.replace("/about", "about")
						.replace(".js", "")
						.replace(".md", "");
					const route = path === "/index" ? "" : path;
					return `
                      <url>
                          <loc>${`https://www.devser.es/${route}`}</loc>
						  <lastmod>${getDate}</lastmod>
                      </url>
                  `;
				})
				.join("")}
      </urlset>
  `;

	fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSiteMap();
