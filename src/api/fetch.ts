import { baseUrl, API_KEY } from "./constants";

export const fetchFromApi = (url: string, page?: number) => {
  let URL;
  if (page) {
    URL = `${baseUrl}${url}?api_key=${API_KEY}&page=${page ? page : 1}`;
  } else {
    URL = `${baseUrl}${url}?api_key=${API_KEY}`;
  }
  return fetch(URL);
};

// movie/popular?api_key=&language=en-US&page=1
