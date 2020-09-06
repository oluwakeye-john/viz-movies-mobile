import { combineReducers } from "redux";
import moviesReducer from "./moviesReducer";

const MainReducer = combineReducers({
  moviesReducer,
});

export default MainReducer;
