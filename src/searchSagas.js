import { takeEvery, put, select } from "redux-saga/effects";

import {
  FETCH_PRODUCT_DETAILS,
  SET_PAGE_NUMBER,
  SET_SEARCH_QUERY,
} from "./actions";
import { fetchProductError, fetchProductSuccess } from "./actions";
import apiCall from "./apiCall";

function* fetchProducts() {
  try {
    const state = yield select((state) => state);
    if (!state.query) {
      return;
    }
    const response = yield apiCall(
      `https://api-r1.tagalys.com/v1/search?q=${state.query}&page=${state.pageNumber}`
    );
    const searchDetails = yield response;
    yield put(fetchProductSuccess(searchDetails));
  } catch (error) {
    yield put(fetchProductError());
  }
}

export function* searchSaga() {
  yield takeEvery(
    [FETCH_PRODUCT_DETAILS, SET_SEARCH_QUERY, SET_PAGE_NUMBER],
    fetchProducts
  );
}
