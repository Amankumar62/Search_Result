export const FETCH_PRODUCT_LOADING = "FETCH_PRODUCT_LOADING";
export const FETCH_PRODUCT_ERROR = "FETCH_PRODUCT_ERROR";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const SET_PAGE_NUMBER = "SET_PAGE_NUMBER";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";
export const FETCH_PRODUCT_DETAILS = "FETCH_PRODUCT_DETAILS";

export const fetchProductLoading = () => {
  return { type: FETCH_PRODUCT_LOADING };
};

export const fetchProductError = () => {
  return { type: FETCH_PRODUCT_ERROR };
};

export const fetchProductSuccess = (payload) => {
  return { type: FETCH_PRODUCT_SUCCESS, payload };
};

export const setSearchQuery = (query) => {
  return { type: SET_SEARCH_QUERY, payload: query };
};

export const setPageNumber = (page) => {
  return { type: SET_PAGE_NUMBER, payload: page };
};

export const setFilterType = (filterType) => {
  return { type: SET_FILTER_TYPE, payload: filterType };
};

export const fetchSearchResults = () => {
  return { type: FETCH_PRODUCT_DETAILS };
};
