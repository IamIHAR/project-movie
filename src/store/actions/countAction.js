export const actionType = {
  SET_COUNT_INCREMENT: "SET_COUNT_INCREMENT",
  SET_COUNT_DECREMENT: "SET_COUNT_DECREMENT",
};

export const actionCountInc = (payload) => ({
  type: actionType.SET_COUNT_INCREMENT,
  payload,
});

export const actionCountDec = (payload) => ({
  type: actionType.SET_COUNT_DECREMENT,
  payload,
});
