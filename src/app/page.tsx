import Image from "next/image";

import ProductList from "@/components/cammon/product-list";
import { db } from "@/db";

import { Header } from "../components/cammon/header";

const Home = async () => {
    const products = await db.query.productTable.findMany({
        with: {
            variants: true,
        },
    });

    return (
        <>
            <Header />
            <div className="space-y-6">
                <div className="px-5">
                    <Image
                    src="/banner-01.png"
                    alt="Leve uma vida com estilo"
                    height={0}
                    width={0}
                    sizes="100vw"
                    className="h-auto w-full"
                    />
                </div>

                <ProductList products={products} title="Mais vendidos" />

            <div className="px-5">
                <Image
                src="/banner-02.png"
                alt="Leve uma vida com estilo"
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto w-full"
                />
            </div>
            </div>
        </>
    );
};

export default Home;