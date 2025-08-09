import { MinusIcon, PlusIcon, TractorIcon } from "lucide-react";
import Image from "next/image";

import { formatCentsToBRL } from "@/helpers/money";

import { Button } from "../ui/button";

interface CartItemProps {
    id: string;
    productName: string;
    productVariantName: string;
    productVariantImageUrl: string;
    productVariantPrinceInCents: string;
    quantity: number;
}

const CartItem = ({
    productName,
    productVariantName,
    productVariantImageUrl,
    productVariantPrinceInCents,
    quantity,
}: CartItemProps) => {

return (
        <div className="flex items-center justify-between">
            <div className="flex item-center gap-4">
                <Image
                    src={productVariantImageUrl}
                    alt={productVariantName}
                    width={78}
                    height={78}
                    className="rounded-lg"
                />

                <div className="flex flex-col gap-1">
                    <p className="text-sm font-semibold">{productName}</p>
                    <p className="text-accent-foreground text-xs font-medium">
                        {productVariantName}
                    </p>
                    <div className="flex items-center w-[100px] border justify-between rounded-lg">
                        <Button className="h-4 w-4" variant="ghost" onClick={() => {}}>
                            <MinusIcon />
                        </Button>
                        <p className="text-xs font-medium">{quantity}</p>
                        <Button className="h-4 w-4" variant="ghost" onClick={() => {}}>
                            <PlusIcon />
                        </Button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-end justify-center gap-1">
                <Button variant="outline" size="icon">
                    <TractorIcon/>
                </Button>

                <p className="text-sm font-bold">
                    {formatCentsToBRL(productVariantPrinceInCents)}
                </p>
            </div>
        </div>
    );
};

export default CartItem;