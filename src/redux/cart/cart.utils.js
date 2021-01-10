export const increaseItemQuantity = (data, obj) => {
  const found = data.find((ele) => ele.id === obj.id);

  let newData;
  if (found) {
    newData = data.map((el) => {
      if (el.id === obj.id) {
        el.quantity += 1;
        return el;
      } else {
        return el;
      }
    });
  } else {
    obj.quantity = 1;
    newData = [...data, obj];
  }

  return newData;
};

export const decreaseItemQuantity = (data, obj) => {
  let newData;
  newData = data.map((el) => {
    if (el.id === obj.id) {
      el.quantity -= 1;
      return el;
    } else {
      return el;
    }
  });
  let newData1 = newData.filter((obj) => obj.quantity > 0);
  return newData1;
};

export const removeItemFromCart = (data, counter, obj) => {
  let newData = data.filter((ele) => ele !== obj);
  let newCounter = counter - obj.quantity;
  return { newCounter, newData };
};
