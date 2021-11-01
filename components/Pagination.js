import Link from "next/link";
import Image from "next/image";

export default function Pagination({ currentPage, numPages }) {
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = `/ofertas-mtb-2021/pagina/${currentPage - 1}`;
    const nextPage = `/ofertas-mtb-2021/pagina/${currentPage + 1}`;

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
                        href={`/ofertas-mtb-2021/pagina/${i + 1}`}
                        key={`page-${i}`}
                        passHref
                    >
                        <li
                            className={`relative block py-2 px-3 leading-tight bg-white border border-gray-300 mr-1 hover:bg-green-500 cursor-pointer ${
                                currentPage === i + 1 && "bg-header text-white"
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
            <div className="text-center pt-10">
                <Link href="https://www.primevideo.com/?tag=21">
                    <a target="_blank" rel="noopener noreferrer nofollow">
                        <Image
                            src="/images/ads/logo-amazon-prime.jpg"
                            alt="Amazon Prime"
                            className="w-full rounded"
                            width={728}
                            height={90}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                        />
                    </a>
                </Link>
            </div>
        </div>
    );
}
