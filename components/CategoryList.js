import Link from "next/link";
import Image from "next/image";
import { removeAccents } from "@/utils/clearCategory";

export default function CategoryList({ categories }) {
    return (
        <div>
            <div className="w-full p-5 bg-gray-50 rounded-lg shadow-md mt-6">
                <h3 className="text-2xl bg-header bg-opacity-80 text-white p-3 rounded font-bold text-center">
                    Categorías
                </h3>
                <ul className="divide-y divide-gray-300">
                    {categories.map((category, index) => (
                        <Link
                            key={index}
                            href={`/ofertas-mtb-2021/categoria/${removeAccents(
                                category
                            )}`}
                            passHref
                        >
                            <li className="p-4 cursor-pointer hover:bg-gray-100">
                                {category}
                            </li>
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="flex justify-center mt-10">
                <Link href="http://www.amazon.es/prime?tag=devser-21">
                    <a target="_blank" rel="noopener noreferrer nofollow">
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
                <Link href="http://www.amazon.es/joinstudent?tag=devser-21">
                    <a target="_blank" rel="noopener noreferrer nofollow">
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

            <div className="flex justify-center mt-10">
                <Link href="https://www.amazon.es/gp/dmusic/promotions/AmazonMusicUnlimited?tag=21">
                    <a target="_blank" rel="noopener noreferrer nofollow">
                        <Image
                            src="/images/ads/amazon-music-column.jpg"
                            width={295}
                            height={246}
                            className="rounded"
                            alt="Amazon Music"
                        />
                    </a>
                </Link>
            </div>

            <div className="flex justify-center mt-10">
                <ins
                    className="adsbygoogle"
                    data-ad-format="fluid"
                    data-ad-layout-key="-4e+co+1y-ou+145"
                    data-ad-client="ca-pub-6725465146144414"
                    data-ad-slot="5065751239"
                ></ins>
            </div>
        </div>
    );
}
