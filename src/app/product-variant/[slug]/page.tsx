import { eq } from "drizzle-orm";
import Image from "next/image";
import { notFound } from "next/navigation";

import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import ProductList from "@/components/common/product-list";
import { Button } from "@/components/ui/button";
import { db } from "@/db";
import { productTable, productVariantTable } from "@/db/schema";
import { formatCentsToBRL } from "@/helpers/money";

import VariantSelector from "./variant-select";

interface ProductVariantPageProps {
    params: Promise<{ slug: string }>;
}

const ProductVariantPage = async ({ params }: ProductVariantPageProps) => {
    const { slug } = await params;
    const productVaraint = await db.query.productVariantTable.findFirst({
    where: eq(productVariantTable.slug, slug),
        with: { product: {
            with: {
                variants: true,
            },
        },
    },
});

    if (!productVaraint) {
        return notFound();
    }

    const likelyProducts = await db.query.productTable.findMany({
        where: eq(productTable.categoryId, productVaraint.productId),
        with: {
            variants: true,
        },
    });

return(
    <>
        <Header/>
            <div className="flex flex-col space-y-6">
                    <Image
                        src={productVaraint.imageUrl}
                        alt={productVaraint.name}
                        sizes="100vm"
                        height={0}
                        width={0}
                        className="h-auto w-full object-cover"
                    />

                <div className="px-5">
                    <VariantSelector
                        selectedVariantSlug={productVaraint.slug}
                        variants={productVaraint.product.variants}
                    />
                </div>

                <div className="px-5">{/*Descrição*/}
                    <h2 className="text-xl font-semibold">{productVaraint.product.name}</h2>

                    <h3 className="text-muted-foreground text-sm">{productVaraint.name}</h3>

                    <h3 className="text-lg font-semibold">{formatCentsToBRL(productVaraint.priceInCents)}</h3>
                </div>

                <div className="px-5">{/*Quantidade*/}</div>
                    <div className="flex flex-col space-y-4 px-5">
                        <Button className="rounded-full" size="lg" variant="outline">Adicinar a sacola</Button>
                        <Button className="rounded-full">Comprar agora</Button>
                    </div>

                    <div className="px-5">
                        <p className="text-shadow-amber-600">{productVaraint.product.description}</p>
                    </div>

                    <ProductList title="Talvez você goste" products={likelyProducts}/>

                    <Footer/>
                </div>
        </>
    );
};

export default ProductVariantPage;