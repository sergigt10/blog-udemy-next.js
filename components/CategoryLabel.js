import Link from "next/link";

export default function CategoryLabel({ children }) {
	const colorKey = {
		Accesorios: "Blue",
		Mantenimiento: "Green",
		Ropa: "Purple",
		Reparación: "Red",
		Electrónica: "Yellow",
		Zapatillas: "Gray",
		Componentes: "Pink",
		Nutrición: "Indigo",
	};

	return (
		<div
			className={`px-2 py-1 bg-category${colorKey[children]} text-white rounded`}
		>
			{/* bg-${colorKey[children]}-600 */}
			<Link href={`/ofertas-mtb/categoria/${children.toLowerCase()}`}>
				{children}
			</Link>
		</div>
	);
}
