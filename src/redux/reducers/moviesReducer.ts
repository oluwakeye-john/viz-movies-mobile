import {
  UPDATE_POPULAR,
  UPDATE_POPULAR_PAGE,
  CONCAT_POPULAR,
  UPDATE_SEARCH_TEXT,
  UPDATE_SEARCH_RESULT,
} from "../constants/movies";

const initial = {
  popular: [],
  popular_page: 1,
  search_text: "",
  search_result: [],
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
    default:
      return state;
  }
};

export default moviesReducer;
