"use client";

import { useMutation, useQueryClient  } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

import { addProductToCart } from "@/actions/add-cart-product";
import { Button } from "@/components/ui/button";

interface AddToCartButtonProps {
    productVariantId: string;
    quantity:number;
}

const AddToCartButton = ({
    productVariantId,
    quantity,
}: AddToCartButtonProps) => {
    const queryClient = useQueryClient();
    const { mutate, isPeding } = useMutation ({
        mutationKey: ["addProductToCart", productVariantId, quantity],
        mutationFn: () =>
            addProductToCart({
                productVariantId,
                quantity,
            }),
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["cart"]});
            }
    });
    return (
        <Button className="rounded-full" size="lg" variant="outline" disabled={isPeding} onClick={() => mutate()}>

            {isPeding &&  <Loader2 className="animate-spin" />}
            Adicionar à sacola
        </Button>
    );
};

export default AddToCartButton;