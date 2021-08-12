import Link from "next/link";

export default function CategoryLabel({ children }) {
	const colorKey = {
		Accesorios: "blue",
		Mantenimiento: "green",
		Ropa: "purple",
		Reparación: "red",
	};

	return (
		<div
			className={`px-2 py-1 bg-${colorKey[children]}-600 text-white rounded`}
		>
			{/* bg-${colorKey[children]}-600 */}
			<Link href={`/blog/category/${children.toLowerCase()}`}>
				{children}
			</Link>
		</div>
	);
}
