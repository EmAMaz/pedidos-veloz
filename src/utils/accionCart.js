export function totalPriceCart(listadoProductos) {
    const priceProduct = listadoProductos.map((item) => item.price * item.quantity);
    const priceTotal = priceProduct.reduce((a, b) => a + b, 0);

    return priceTotal;
}
