import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";
import CounterReducer from "./counter/counter.reducer";

export const rootReducer = combineReducers({
  cart: CartReducer,
  count: CounterReducer,
});
