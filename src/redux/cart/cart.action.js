import cartActionTypes from "./cart.action.types";

export const toggleHiddenState = () => ({
  type: cartActionTypes.TOGGLE_HIDDEN_STATE,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item, removeAll = false) => ({
  type: cartActionTypes.REMOVE_ITEM,
  payload: [item, removeAll],
});
