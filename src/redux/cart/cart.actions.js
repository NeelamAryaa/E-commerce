import CartActionTypes from "./cart.types";

export const AddCartItem = (data) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: data,
  id: data.id,
});
