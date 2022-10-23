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
          payload: response.data.videos.results,
        })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: actionType.SET_INFO_ERROR, payload: err.response });
      });
  },
  addMovies: (payload) => ({type: actionType.SET_ADD_MOVIES, payload})
};
