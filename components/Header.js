import Link from "next/link";
import Image from "next/image";

export default function Header() {
	return (
		<header className="bg-header text-white shadow w-full">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/">
					<a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
						<Image
							src="/images/logo.png"
							width={40}
							height={40}
							alt="logo"
						/>
						<span className="ml-3 font-mono text-4xl">DevSer</span>
					</a>
				</Link>
				<nav className="flex flex-wrap md:w-4/5 items-center md:justify-end justify-center text-base ml:ml-auto">
					<Link href="/blog">
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200 font-mono">
							Blog
						</a>
					</Link>
					<Link href="/about">
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200 font-mono">
							Sobre mi
						</a>
					</Link>
					<Link href="mailto:info@devser.es">
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200 font-mono">
							info@devser.es
						</a>
					</Link>
				</nav>
			</div>
		</header>
	);
}
