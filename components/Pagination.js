import Link from "next/link";

export default function Pagination({ currentPage, numPages }) {
	const isFirst = currentPage === 1;
	const isLast = currentPage === numPages;
	const prevPage = `/ofertas-mtb/page/${currentPage - 1}`;
	const nextPage = `/ofertas-mtb/page/${currentPage + 1}`;

	if (numPages === 1) return <></>;

	return (
		<div className="mt-6">
			<ul className="flex pl-0 list-none my-2 justify-center">
				{!isFirst && (
					<Link href={prevPage} passHref>
						<li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
							Anterior
						</li>
					</Link>
				)}
				{Array.from({ length: numPages }, (_, i) => (
					<Link
						href={`/ofertas-mtb/page/${i + 1}`}
						key={`page-${i}`}
						passHref
					>
						<li
							className={`relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer ${
								currentPage === i + 1 &&
								"bg-header bg-opacity-40"
							}`}
						>
							{i + 1}
						</li>
					</Link>
				))}

				{!isLast && (
					<Link href={nextPage} passHref>
						<li className="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-800 mr-1 hover:bg-gray-200 cursor-pointer">
							Siguiente
						</li>
					</Link>
				)}
			</ul>
		</div>
	);
}
