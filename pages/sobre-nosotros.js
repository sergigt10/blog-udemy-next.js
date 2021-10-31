import Layout from "@/components/Layout";
import Link from "next/link";

export default function AboutPage() {
    return (
        <Layout title="Accesorios MTB, Componentes MTB, Productos MTB">
            <h1 className="text-3xl font-bold border-b-4 p-3 mt-6">
                ¿Quíenes somos?
            </h1>

            <div className="w-full px-8 py-8 mt-6 bg-gray-200 rounded-lg shadow-md">
                <p className="mb-3">
                    Somos un blog especializado en el mundo del{" "}
                    <Link
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        href="https://www.amazon.es/ciclismo/b?ie=UTF8&node=2928487031&linkCode=ll2&tag=devser-21&linkId=10f52c9fe51b33de60abdde7722d9348&language=es_ES&ref_=as_li_ss_tl"
                    >
                        <a>
                            <b>ciclismo MTB</b>
                        </a>
                    </Link>{" "}
                    donde proponemos productos que pueden ser útiles para
                    disfrutar del ciclismo en montaña.
                </p>
            </div>
        </Layout>
    );
}
