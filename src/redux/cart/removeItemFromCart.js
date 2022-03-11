const removeItemFromCart = (cartItems, [itemToRemove, removeAll]) => {
  if (!removeAll && cartItems.find((item) => item.id === itemToRemove.id).quantity > 1) {
    return cartItems.map((item) =>
      item.id === itemToRemove.id
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
  }
  return cartItems.filter((item) => item.id !== itemToRemove.id);
};

export default removeItemFromCart;
