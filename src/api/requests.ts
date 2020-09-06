import { fetchFromApi } from "./fetch";
import { GET_POPULAR_MOVIES, GET_MOVIE_DETAIL } from "./api";

export const getPopularMovies = (page = 1) => {
  return fetchFromApi(GET_POPULAR_MOVIES, page);
};

export const getMovieDetail = (id: number) => {
  return fetchFromApi(GET_MOVIE_DETAIL(id));
};
