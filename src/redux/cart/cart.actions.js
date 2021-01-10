import CartActionTypes from "./cart.types";

export const IncreaseItemQuantity = (data) => ({
  type: CartActionTypes.INCREASE_ITEM_QUANTITY,
  payload: data,
});

export const DecreaseItemQuantity = (data) => ({
  type: CartActionTypes.DECREASE_ITEM_QUANTITY,
  payload: data,
});

export const RemoveItemFromCart = (data) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: data,
});

export const ToggleCart = () => ({
  type: CartActionTypes.CART_TOGGLE,
});
