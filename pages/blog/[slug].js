import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";

export default function PostPage({
	frontmatter: { title, category, date, cover_image, author },
	content,
}) {
	return (
		<Layout title={title}>
			<FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-xs" />
			<Link href="/blog"> VOLVER</Link>
			<div className="w-full px-10 py-6 bg-gray-200 rounded-lg shadow-md mt-6">
				<div className="flex justify-between items-center mt-4">
					<h1 className="text-5xl mb-7">{title}</h1>
					<CategoryLabel>{category}</CategoryLabel>
				</div>

				<Image
					src={cover_image}
					alt={title}
					className="w-full rounded"
					width={1480}
					height={854}
				/>

				<div className="blog-text mt-2">
					<div
						dangerouslySetInnerHTML={{ __html: marked(content) }}
					></div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace(".md", ""),
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMeta = fs.readFileSync(
		path.join("posts", slug + ".md"),
		"utf-8"
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);
	return {
		props: {
			frontmatter,
			content,
			slug,
		},
	};
}
