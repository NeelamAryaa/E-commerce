import CartActionTypes from "./cart.types";

const INITIAL_STATE = {
  data: [],
};
const CartReducer = (state = INITIAL_STATE, action) => {
  const found = state.data.find((ele) => ele.id === action.id);

  switch (action.type) {
    case CartActionTypes.ADD_CART_ITEM:
      if (found) {
        return state;
      } else {
        return {
          ...state,
          data: [...state.data, action.payload],
        };
      }

    default:
      return state;
  }
};

export default CartReducer;
