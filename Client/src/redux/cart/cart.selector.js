import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

// this is the convention of variables name for selectors which starts with select and other parts of the name gets added to it.

export const selectToggleHidden = createSelector(
  selectCart,
  (cart) => cart.hidden
);

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);
//createSelector takes two arguments:
// 1. an array of input selectors
// 2. a callback function which will return the value you want to return from the selector

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumulatedItems, cartItem) => accumulatedItems + cartItem.quantity,
      0
    );
  }
);

export const selectTotalAmount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce(
      (accumulatedAmount, cartItem) =>
        accumulatedAmount + cartItem.quantity * cartItem.price,
      0
    );
  }
);