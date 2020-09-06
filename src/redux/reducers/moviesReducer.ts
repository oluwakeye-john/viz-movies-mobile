import {
  UPDATE_POPULAR,
  UPDATE_POPULAR_PAGE,
  CONCAT_POPULAR,
} from "../constants/movies";

const initial = {
  popular: [],
  popular_page: 1,
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
      console.log("nnnnnnew", tt.length);
      return {
        ...state,
        popular: tt,
      };
    default:
      return state;
  }
};

export default moviesReducer;
