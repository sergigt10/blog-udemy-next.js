import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Link from "next/link";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";

export default function PostPage({
	frontmatter: { title, category, cover_image },
	content,
}) {
	const customRenderers = {
		p(paragraph) {
			const { node } = paragraph;
			if (node.children[0].tagName === "img") {
				const image = node.children[0];
				return (
					<div className="flex justify-center">
						<Image
							src={image.properties.src}
							alt={image.properties.alt}
							height={200}
							width={355}
						/>
					</div>
				);
			}

			return <p>{paragraph.children}</p>;
		},

		code({ node, inline, className, children, ...props }) {
			const match = /language-(\w+)/.exec(className || "");
			return !inline && match ? (
				<SyntaxHighlighter
					style={dracula}
					language={match[1]}
					PreTag="div"
					{...props}
				>
					{String(children).replace(/\n$/, "")}
				</SyntaxHighlighter>
			) : (
				<code className={className} {...props}>
					{children}
				</code>
			);
		},
	};

	return (
		<Layout title={title}>
			<FontAwesomeIcon icon={faArrowAltCircleLeft} className="text-xs" />
			<Link href="/blog"> VOLVER</Link>
			<div className="w-full px-10 py-6 bg-gray-200 rounded-lg shadow-md mt-6">
				<div className="flex justify-between items-center mt-4 mb-7">
					<h1 className="md:text-3xl sm:text-xl font-bold">
						{title}
					</h1>
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
					<div>
						<ReactMarkdown components={customRenderers}>
							{content}
						</ReactMarkdown>
					</div>
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
