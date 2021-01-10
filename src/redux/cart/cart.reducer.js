import CartActionTypes from "./cart.types";
import {
  increaseItemQuantity,
  decreaseItemQuantity,
  removeItemFromCart,
} from "./cart.utils";

const INITIAL_STATE = {
  data: [],
  counter: 0,
  toggle: false,
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.INCREASE_ITEM_QUANTITY:
      return {
        ...state,
        data: increaseItemQuantity(state.data, action.payload),
        counter: state.counter + 1,
      };
    case CartActionTypes.DECREASE_ITEM_QUANTITY:
      return {
        ...state,
        data: decreaseItemQuantity(state.data, action.payload),
        counter: state.counter - 1,
      };
    case CartActionTypes.REMOVE_CART_ITEM:
      let Data = removeItemFromCart(state.data, state.counter, action.payload);
      console.log(Data);
      return {
        ...state,
        data: Data.newData,
        counter: Data.newCounter,
      };
    case CartActionTypes.CART_TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };

    default:
      return state;
  }
};

export default CartReducer;
