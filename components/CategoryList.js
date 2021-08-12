import Link from "next/link";

export default function CategoryList({ categories }) {
	return (
		<div className="w-full p-5 bg-gray-50 rounded-lg shadow-md mt-6">
			<h3 className="text-2xl bg-header bg-opacity-80 text-white p-3 rounded font-bold text-center">
				Categorías
			</h3>
			<ul className="divide-y divide-gray-300">
				{categories.map((category, index) => (
					<Link
						key={index}
						href={`/blog/categoria/${category.toLowerCase()}`}
						passHref
					>
						<li className="p-4 cursor-pointer hover:bg-gray-100">
							{category}
						</li>
					</Link>
				))}
			</ul>
		</div>
	);
}
