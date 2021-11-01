import fs from "fs";
import path from "path";
import Image from "next/image";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; /* eslint-disable import/first */
import Layout from "@/components/Layout";
import CategoryLabel from "@/components/CategoryLabel";

export default function PostPage({
    frontmatter: {
        titlePost,
        title,
        description,
        category,
        cover_image,
        url_affiliate,
    },
    content,
}) {
    const customRenderers = {
        p(paragraph) {
            const { node } = paragraph;

            if (node.children[0].tagName === "a") {
                const link = node.children[0];
                const image = link.children[0];
                return (
                    <div>
                        <div className="flex justify-center mt-5">
                            <Link href={link.properties.href}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <Image
                                        src={image.properties.src}
                                        alt={image.properties.alt}
                                        height={360}
                                        width={480}
                                        className="rounded-lg"
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                                    />
                                </a>
                            </Link>
                        </div>
                        <div className="flex justify-center mt-2">
                            <Link href={link.properties.href}>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer nofollow"
                                >
                                    <Image
                                        src="/images/posts/5-estrellas.png"
                                        alt={image.properties.alt}
                                        height={57}
                                        width={300}
                                        placeholder="blur"
                                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                                    />
                                </a>
                            </Link>
                        </div>
                    </div>
                );
            }

            // if (node.children[0].tagName === "img") {
            // 	const image = node.children[0];
            // 	return (
            // 		<div className="flex justify-center mt-5">
            // 			<Image
            // 				src={image.properties.src}
            // 				alt={image.properties.alt}
            // 				height={360}
            // 				width={480}
            // 				className="rounded-lg"
            // 				placeholder="blur"
            // 				blurDataURL={`data:image/svg+xml;base64,${toBase64(
            // 					shimmer(700, 475)
            // 				)}`}
            // 			/>
            // 		</div>
            // 	);
            // }

            return <p>{paragraph.children}</p>;
        },
    };
    return (
        <Layout title={title} description={description}>
            <Link href="/ofertas-mtb-2021"> 🚲 VOLVER</Link>
            <div className="flex justify-center">
                <div className="sm:w-12/12 md:w-10/12 md:px-10 px-6 py-6 bg-gray-200 rounded-lg shadow-md mt-6">
                    <div className="flex md:flex-row flex-col justify-between items-center mt-4 mb-7">
                        <h1 className="text-3xl font-bold md:pb-0 pb-5">
                            {titlePost}
                        </h1>
                        <CategoryLabel>{category}</CategoryLabel>
                    </div>
                    <Link href={url_affiliate}>
                        <a target="_blank" rel="noopener noreferrer nofollow">
                            <Image
                                src={cover_image}
                                alt={title}
                                className="w-full rounded-lg"
                                width={1440}
                                height={960}
                                placeholder="blur"
                                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                            />
                        </a>
                    </Link>

                    <div className="text-center pt-5">
                        <Link href=" https://www.amazon.es/gp/dmusic/promotions/AmazonMusicUnlimited?tag=21">
                            <a
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                <Image
                                    src="/images/ads/logo-amazon-music.png"
                                    alt="Amazon Music"
                                    className="w-full rounded"
                                    width={726}
                                    height={89}
                                    placeholder="blur"
                                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                                />
                            </a>
                        </Link>
                    </div>

                    <div className="blog-text mt-2">
                        <div>
                            <ReactMarkdown
                                components={customRenderers}
                                linkTarget="_blank"
                            >
                                {content}
                            </ReactMarkdown>
                            <div className="flex justify-center mt-10">
                                <Link href="https://www.amazon.es?&linkCode=ll2&tag=devser-21&linkId=f0a45e125123ce48f507736e230127e9&language=es_ES&ref_=as_li_ss_tl">
                                    <a
                                        target="_blank"
                                        rel="noopener noreferrer nofollow"
                                    >
                                        <Image
                                            src="/images/posts/banner-amazon-1.jpg"
                                            alt={title}
                                            className="w-full rounded"
                                            width={900}
                                            height={200}
                                            placeholder="blur"
                                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
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
