function calcTotalPrice(cart) {
  return cart.reduce((tally, cartItem) => {
    if (!cartItem) return tally; // products can be deleted and still in your cart
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}

export default calcTotalPrice;
