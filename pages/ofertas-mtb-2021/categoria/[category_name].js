import fs from "fs";
import path from "path";
import Layout from "@/components/Layout";
import Post from "@/components/Post";
import CategoryList from "@/components/CategoryList";
import matter from "gray-matter";
import { getPosts } from "@/lib/posts";
import { removeAccents } from "@/utils/clearCategory";

export default function CategoryBlogPage({ posts, categoryName, categories }) {
	return (
		<Layout title="▷ Productos bicicleta montaña, Gps garmin MTB 2021, Ofertas MTB">
			<div className="flex justify-between">
				<div className="w-3/4 mr-10">
					<h1 className="text-3xl border-b-4 p-3 font-bold mt-6 capitalize">
						{categoryName}
					</h1>

					<div className="grid md:grid-cols-1 lg:grid-cols-3 gap-5">
						{posts.map((post, index) => (
							<Post key={index} post={post} />
						))}
					</div>
				</div>

				<div className="w-1/4">
					<CategoryList categories={categories} />
				</div>
			</div>
		</Layout>
	);
}

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("posts"));

	const categories = files.map((filename) => {
		const markdownWithMeta = fs.readFileSync(
			path.join("posts", filename),
			"utf-8"
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return removeAccents(frontmatter.category);
	});

	const paths = categories.map((category) => ({
		params: { category_name: category },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params: { category_name } }) {
	const posts = getPosts();

	// Get categories for sidebar
	const categories = posts.map((post) => post.frontmatter.category);
	const uniqueCategories = [...new Set(categories)];

	// Filter posts by category
	const categoryPosts = posts.filter(
		(post) => removeAccents(post.frontmatter.category) === category_name
	);

	return {
		props: {
			posts: categoryPosts,
			categoryName: category_name,
			categories: uniqueCategories,
		},
	};
}
