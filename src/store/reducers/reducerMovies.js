import { actionType } from "../actions/actionMovies";

const initialState = {
  movies: [],
  success: false,
  loading: false,
  error: false,
  videos: [],
  favourite: [],
};

export const reducerMovies = (state = initialState, action) => {
  const uniqArr = [];
  const { payload, type } = action;
  switch (type) {
    case actionType.SET_MOVIES:
      return {
        ...state,
        movies: [],
        succes: false,
        loading: true,
      };

    case actionType.SET_MOVIES_SUCCESS:
      return {
        ...state,
        movies: payload,
        succes: true,
        loading: false,
      };
    case actionType.SET_MOVIES_ERROR:
      return {
        ...state,
        error: true,
      };

    case actionType.SET_INFO:
      return {
        ...state,
        videos: [],
        succes: false,
        loading: true,
      };

    case actionType.SET_INFO_SUCCESS:
      return {
        ...state,
        videos: payload,
        succes: true,
        loading: false,
      };
    case actionType.SET_INFO_ERROR:
      return {
        ...state,
        error: true,
      };
    case actionType.SET_ADD_MOVIES:
      return {
        ...state,
        favourite: Array.from(new Set([...state.favourite, payload])).filter(
          ({ id }) => {
            if (!uniqArr.includes(id)) {
              uniqArr.push(id);
              return id;
            }
          }
        ),
      };
    case actionType.SET_SEARCH:
      return {
        ...state,
        movies: [],
        succes: false,
        loading: true,
      };

    case actionType.SET_SEARCH_SUCCES:
      return {
        ...state,
        movies: payload,
        succes: true,
        loading: false,
      };
    case actionType.SET_SEARCH_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
};
