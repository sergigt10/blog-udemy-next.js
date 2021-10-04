import Link from "next/link";
import Image from "next/image";
import CategoryLabel from "./CategoryLabel";

export default function Post({ post }) {
    return (
        <div className="w-full px-8 py-8 mt-6 bg-gray-200 rounded-lg shadow-md">
            <Link href={`/ofertas-mtb-2021/${post.slug}`}>
                <a>
                    <Image
                        src={post.frontmatter.cover_image}
                        alt={post.frontmatter.title}
                        width={600}
                        height={420}
                        className="mb-4 rounded-lg"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkmZZZDwADLQGEHJ0zKgAAAABJRU5ErkJggg=="
                    />
                </a>
            </Link>
            <div className="flex justify-between items-center">
                {/* <span className="font-light text-gray-600">
					{post.frontmatter.date}
				</span> */}
                <CategoryLabel>{post.frontmatter.category}</CategoryLabel>
            </div>

            <div className="mt-2">
                <Link href={`/ofertas-mtb-2021/${post.slug}`}>
                    <a className="text-2xl text-gray-700 font-bold hover:underline">
                        {post.frontmatter.titlePost}
                    </a>
                </Link>
                <p className="mt-2 text-gray-600">{post.frontmatter.excerpt}</p>
            </div>

            <div className="flex justify-between items-center mt-6">
                <Link href={`/ofertas-mtb-2021/${post.slug}`}>
                    <a className="text-gray-700 hover:text-gray-600 hover:underline font-bold">
                        + Información
                    </a>
                </Link>
                <Link href={`${post.frontmatter.url_affiliate}`}>
                    <a
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="bg-black hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                    >
                        Ver oferta
                    </a>
                </Link>
            </div>
        </div>
    );
}
