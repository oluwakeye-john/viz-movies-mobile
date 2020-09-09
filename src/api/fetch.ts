import { baseUrl, API_KEY } from "./constants";

export const fetchFromApi = (url: string, params?: any[]) => {
  let URL;
  let extras = "";

  params?.map((p) => {
    extras = extras + `&${p.key}=${p.value}`;
  });

  URL = `${baseUrl}${url}?api_key=${API_KEY}${extras}`;

  return fetch(URL);
};
