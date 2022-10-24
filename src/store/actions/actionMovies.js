import axios from "axios";
import { API_KEY } from "../../config";

export const actionType = {
  SET_MOVIES: "SET_MOVIES",
  SET_MOVIES_SUCCESS: "SET_MOVIES_SUCCESS",
  SET_MOVIES_ERROR: "SET_MOVIES_ERROR",

  SET_INFO: "SET_INFO",
  SET_INFO_SUCCESS: "SET_INFO_SUCCESS",
  SET_INFO_ERROR: "SET_INFO_ERROR",

  SET_ADD_MOVIES: 'SET_ADD_MOVIES',

  SET_SEARCH: 'SET_SEARCH',
  SET_SEARCH_SUCCES: 'SET_SEARCH_SUCCES',
  SET_SEARCH_ERROR: 'SET_SEARCH_ERROR',

};

export const actionMovies = {
  getMovies: (id) => async (dispatch) => {
    dispatch({ type: actionType.SET_MOVIES });
    axios
      .get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=${id}`)
      .then((response) =>
        dispatch({
          type: actionType.SET_MOVIES_SUCCESS,
          payload: response.data.results,
        })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: actionType.SET_MOVIES_ERROR, payload: err.response });
      });
  },

  getInfo: (id) => async (dispatch) => {
    dispatch({ type: actionType.SET_INFO });
    axios
      .get(`http://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ru-RU&append_to_response=videos`)
      .then((response) =>
        dispatch({
          type: actionType.SET_INFO_SUCCESS,
          payload: response.data.videos.results[0],
        })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: actionType.SET_INFO_ERROR, payload: err.response });
      });
  },
  addMovies: (payload) => ({type: actionType.SET_ADD_MOVIES, payload}),

  getSearch: (search) => async (dispatch) => {
    dispatch({ type: actionType.SET_SEARCH });
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${search}`)
      .then((response) =>
        dispatch({
          type: actionType.SET_SEARCH_SUCCES,
          payload: response.data.results,
        })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: actionType.SET_SEARCH_ERROR, payload: err.response });
      });
  },
};
