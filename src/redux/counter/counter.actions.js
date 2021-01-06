import CounterActionTypes from "./counter.types";

export const Counter = () => ({
  type: CounterActionTypes.ADD_COUNT,
});

// export const ItemCount = (data, id) => ({
//   type: CounterActionTypes.ITEM_COUNT,
//   id: id,
//   data: data,
// });
