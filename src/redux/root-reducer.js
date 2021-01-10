import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  cart: CartReducer,
});
