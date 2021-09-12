import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Link from "next/link";
import Image from "next/image";
import Post from "@/components/Post";
import Pagination from "@/components/Pagination";
import CategoryList from "@/components/CategoryList";
import { POSTS_PER_PAGE } from "@/config/index";
import { getPosts } from "@/lib/posts";

export default function BlogPage({ posts, numPages, currentPage, categories }) {
	return (
		<Layout>
			<div className="flex justify-between flex-col md:flex-row">
				<div className="md:w-3/4 md:mr-10">
					<h1 className="text-3xl border-b-4 p-3 font-bold mt-6">
						Recomendaciones y ofertas MTB
					</h1>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
						{posts.map((post, index) => (
							<Post key={index} post={post} />
						))}
					</div>

					<Pagination currentPage={currentPage} numPages={numPages} />
				</div>

				<div className="md:w-1/4">
					<CategoryList categories={categories} />

					<div className="flex justify-center mt-10">
						<Link
							href="http://www.amazon.es/prime?tag=devser-21"
							target="_blank"
							rel="noopener noreferrer"
						>
							<a>
								<Image
									src="/images/ads/amazon-prime-column.jpg"
									width={295}
									height={246}
									className="rounded"
									alt="Amazon Prime"
								/>
							</a>
						</Link>
					</div>

					<div className="flex justify-center mt-10">
						<Link
							href="http://www.amazon.es/joinstudent?tag=devser-21"
							target="_blank"
							rel="noopener noreferrer"
						>
							<a>
								<Image
									src="/images/ads/amazon-prime-student-column.jpg"
									width={295}
									height={246}
									className="rounded"
									alt="Amazon Prime Student"
								/>
							</a>
						</Link>
					</div>
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

	let paths = [];

	for (let i = 1; i <= numPages; i++) {
		paths.push({
			params: { page_index: i.toString() },
		});
	}

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const page = parseInt((params && params.page_index) || 1);

	const files = fs.readdirSync(path.join("posts"));

	const posts = getPosts();

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	const numPages = Math.ceil(files.length / POSTS_PER_PAGE);
	const pageIndex = page - 1;
	const orderedPosts = posts.slice(
		pageIndex * POSTS_PER_PAGE,
		(pageIndex + 1) * POSTS_PER_PAGE
	);

	return {
		props: {
			posts: orderedPosts,
			numPages,
			currentPage: page,
			categories: uniqueCategories,
		},
	};
}
