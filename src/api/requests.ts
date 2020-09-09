import { fetchFromApi } from "./fetch";
import { GET_POPULAR_MOVIES, GET_MOVIE_DETAIL, SEARCH_MOVIE } from "./api";

export const getPopularMovies = (page = 1) => {
  return fetchFromApi(GET_POPULAR_MOVIES, [
    {
      key: "page",
      value: page,
    },
  ]);
};

export const getMovieDetail = (id: number) => {
  return fetchFromApi(GET_MOVIE_DETAIL(id));
};

export const searchMovie = (text: string) => {
  return fetchFromApi(SEARCH_MOVIE, [
    {
      key: "query",
      value: text,
    },
  ]);
};
