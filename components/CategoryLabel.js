import Link from "next/link";

export default function CategoryLabel({ children }) {
	const colorKey = {
		Accesorios: "blue",
		Mantenimiento: "green",
		Ropa: "purple",
		Reparación: "red",
		Electrónica: "yellow",
		Zapatillas: "gray",
		Componentes: "pink",
		Nutrición: "indigo",
	};

	return (
		<div
			className={`px-2 py-1 bg-${colorKey[children]}-600 text-white rounded`}
		>
			{/* bg-${colorKey[children]}-600 */}
			<Link href={`/ofertas-mtb/categoria/${children.toLowerCase()}`}>
				{children}
			</Link>
		</div>
	);
}
