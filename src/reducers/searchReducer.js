import {
  FETCH_PRODUCT_LOADING,
  FETCH_PRODUCT_ERROR,
  FETCH_PRODUCT_SUCCESS,
  SET_SEARCH_QUERY,
  SET_PAGE_NUMBER,
  SET_FILTER_TYPE,
} from "../actions";

const initialState = {
  products: [],
  filterOptions: [],
  sortOptions: [],
  query: "tops",
  pageNumber: 1,
  loading: true,
  total: 0,
  perPage: 0,
  error: null,
  filterType: null,
};
const searchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case FETCH_PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: "Failed to fetch products",
      };
    case FETCH_PRODUCT_SUCCESS:
      return {
        ...state,
        products: actions.payload.details,
        filterOptions: actions.payload.filters,
        sortOptions: actions.payload.sort_options,
        total: actions.payload.total,
        perPage: actions.payload.per_page,
        loading: false,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        query: actions.payload,
        pageNumber: 1,
      };
    case SET_PAGE_NUMBER:
      return {
        ...state,
        pageNumber: actions.payload,
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterType:
          state.filterType === actions.payload ? null : actions.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
