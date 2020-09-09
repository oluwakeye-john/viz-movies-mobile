import {
  UPDATE_POPULAR,
  UPDATE_POPULAR_PAGE,
  CONCAT_POPULAR,
  UPDATE_SEARCH_TEXT,
  UPDATE_SEARCH_RESULT,
  UPDATE_FAVORITES,
  CONCAT_FAVORITES,
} from "../constants/movies";

const initial = {
  popular: [],
  popular_page: 1,
  search_text: "",
  search_result: [],
  favorites: [],
};

const moviesReducer = (state: any = initial, action: any) => {
  switch (action.type) {
    case UPDATE_POPULAR:
      return {
        ...state,
        popular: action.payload,
      };
    case UPDATE_POPULAR_PAGE:
      return {
        ...state,
        popular_page: action.payload,
      };
    case CONCAT_POPULAR:
      const tt = state.popular.concat(action.payload);
      return {
        ...state,
        popular: tt,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        search_text: action.payload,
      };
    case UPDATE_SEARCH_RESULT:
      return {
        ...state,
        search_result: action.payload,
      };
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case CONCAT_FAVORITES:
      console.log(action.payload);
      const isExist = state.favorites.filter((fav: any) => {
        if (fav.id === action.payload.id) {
          console.log("duplicate");
          return false;
        } else {
          return true;
        }
      });
      if (isExist.includes(false)) {
        return {
          ...state,
        };
      } else {
        const newFav = state.favorites.concat(action.payload);
        return {
          ...state,
          favorites: newFav,
        };
      }
    default:
      return state;
  }
};

export default moviesReducer;
