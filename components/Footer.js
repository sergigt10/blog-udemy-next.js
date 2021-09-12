import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<footer className="bg-footer text-white shadow w-full mt-20">
			<div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
				<Link href="/">
					<a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
						<Image
							src="/images/logo.png"
							width={40}
							height={40}
							alt="logo"
						/>
						<span className="ml-3 font-mono text-4xl">BiciMTB</span>
					</a>
				</Link>
				<nav className="flex flex-wrap md:w-4/5 items-center md:justify-end justify-center text-base ml:ml-auto">
					<Link href="/ofertas-mtb">
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200">
							Ofertas MTB
						</a>
					</Link>
					<Link
						target="_blank"
						rel="noopener noreferrer"
						href="https://www.amazon.es/ciclismo/b?ie=UTF8&node=2928487031&linkCode=ll2&tag=devser-21&linkId=10f52c9fe51b33de60abdde7722d9348&language=es_ES&ref_=as_li_ss_tl"
					>
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200">
							Bicicleta MTB
						</a>
					</Link>
					<Link href="/aviso-legal">
						<a className="mx-5 cursor-pointer uppercase text-xl hover:text-gray-200">
							Aviso legal
						</a>
					</Link>
				</nav>
			</div>
		</footer>
	);
}
