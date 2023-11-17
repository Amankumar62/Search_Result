const initialState = {
  products: [],
  filterOptions: [],
  sortOptions: [],
  query: "tops",
  pageNumber: 1,
  loading: false,
  total: 0,
  per_page: 0,
  error: null,
  filterType: null,
};
const searchReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "FETCH_PRODUCT_LOADING":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_PRODUCT_ERROR":
      return {
        ...state,
        loading: false,
        error: "Failed to fetch products",
      };
    case "FETCH_PRODUCT_SUCCESS":
      return {
        ...state,
        products: actions.payload.details,
        filterOptions: actions.payload.filters,
        sortOptions: actions.payload.sort_options,
        total: actions.payload.total,
        per_page: actions.payload.per_page,
      };
    case "SET_QUERY":
      return {
        ...state,
        query: actions.payload,
      };
    case "SET_PAGENO":
      return {
        ...state,
        pageNumber: actions.payload,
      };
    case "SET_FILTER_TYPE":
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
