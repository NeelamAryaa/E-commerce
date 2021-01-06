import CounterActionTypes from "./counter.types";

const INITIAL_STATE = {
  count: 0,
};

const CounterReducer = (state = INITIAL_STATE, action) => {
  // const found = action.data.find((ele) => ele.id === action.id);

  console.log("counter" + action);
  switch (action.type) {
    case CounterActionTypes.ADD_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    // case CounterActionTypes.ITEM_COUNT:
    //   return state;

    default:
      return state;
  }
};

export default CounterReducer;
