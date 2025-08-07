export const formatCentsToBRL = (cents: number) => {
    return new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "brl",
    }).format(cents / 100);
};