"use client";

import { eq } from "drizzle-orm";
import { headers } from "next/headers";
import z from "zod";

import { db } from "@/db";
import { cartItemTable } from "@/db/schema";
import { auth } from "@/lib/auth";

import { removeProductFromCartSchema } from "./schema";

export const removeProductFromCart = async (
    data: z.infer<typeof removeProductFromCartSchema>,
) => {
    removeProductFromCartSchema.safeParse(data);
    const session= await auth.api.getSession({
        headers: await headers(),
    });

    if (!session?.user) {
        throw new Error("Unauthorizad");
    }

    const cartItem = await db.query.cartTable.findFirst({
        where: (cart, { eq }) => eq(cart.userId, session.user.id),
        with: {
            cart: true,
        },
    });

    const cartDoesNotBelongToUser = cartItem?.userId !== session.user.id;
    if (cartDoesNotBelongToUser) {
        throw new Error("Unauthorized");
    }

    if (!cartItem) {
        throw new Error("Cart item not found");
    }

    await db.delete(cartItemTable).where(eq(cartItemTable.id, cartItem.id));
};