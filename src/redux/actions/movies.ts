import {
  getPopularMovies,
  getMovieDetail,
  searchMovie,
} from "../../api/requests";
import {
  UPDATE_POPULAR,
  UPDATE_POPULAR_PAGE,
  CONCAT_POPULAR,
  UPDATE_SEARCH_TEXT,
  UPDATE_SEARCH_RESULT,
  UPDATE_FAVORITES,
  CONCAT_FAVORITES,
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

export const updateSearch = (text: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({
        type: UPDATE_SEARCH_TEXT,
        payload: text,
      });
      if (text === "") {
        dispatch({
          type: UPDATE_SEARCH_RESULT,
          payload: [],
        });
      } else {
        const searchResult = await searchMovie(text);
        const searchResultJson = await searchResult.json();
        dispatch({
          type: UPDATE_SEARCH_RESULT,
          payload: searchResultJson.results,
        });
      }
    } catch (err) {
      console.log(err);
      return false;
    }
  };
};

export const addToFavorites = (favorite: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: CONCAT_FAVORITES,
      payload: favorite,
    });
  };
};

export const updateFavorites = (favorites: any) => {
  return async (dispatch: any) => {
    dispatch({
      type: UPDATE_FAVORITES,
      payload: favorites,
    });
  };
};
