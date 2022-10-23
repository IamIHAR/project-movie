import {
  legacy_createStore as createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { countReducer } from "./reducers/countReducer";
import { reducerMovies } from "./reducers/reducerMovies";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    count: countReducer,
    movies: reducerMovies,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
