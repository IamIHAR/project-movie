import { actionType } from "../actions/countAction";

const initialState = {
  count: 0,
};
export const countReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionType.SET_COUNT_INCREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    case actionType.SET_COUNT_DECREMENT:
      return {
        ...state,
        count: state.count + payload,
      };
    default:
      return state;
  }
};
