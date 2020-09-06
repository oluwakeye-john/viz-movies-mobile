import { getPopularMovies, getMovieDetail } from "../../api/requests";
import {
  UPDATE_POPULAR,
  UPDATE_POPULAR_PAGE,
  CONCAT_POPULAR,
} from "../constants/movies";

export const updatePopular = () => {
  return async (dispatch: any) => {
    try {
      const resp = await getPopularMovies();
      const respJson = await resp.json();
      dispatch({
        type: UPDATE_POPULAR_PAGE,
        payload: 1,
      });
      dispatch({
        type: UPDATE_POPULAR,
        payload: respJson.results,
      });
    } catch (error) {
      return false;
    }
  };
};

export const loadMore = (newPage: number) => {
  return async (dispatch: any) => {
    try {
      console.log(">>>>");
      dispatch({
        type: UPDATE_POPULAR_PAGE,
        payload: newPage,
      });
      const resp = await getPopularMovies(newPage);
      const respJson = await resp.json();
      dispatch({
        type: CONCAT_POPULAR,
        payload: respJson.results,
      });
      console.log("page", newPage);
      console.log(respJson.results.length);
    } catch (err) {
      return false;
    }
  };
};

export const updatePopularPage = (newPage: number) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: UPDATE_POPULAR_PAGE,
        payload: newPage,
      });
    } catch (err) {
      return false;
    }
  };
};

export const updateMovieDetail = (id: number) => {
  return async (dispatch: any) => {
    try {
      const detail = await getMovieDetail(id);
      const detailJson = await detail.json();
      return detailJson;
    } catch (err) {
      return false;
    }
  };
};
