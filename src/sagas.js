import { takeEvery, put, select } from "redux-saga/effects";

function* fetchProducts() {
  try {
    const state = yield select((state) => state);
    if (!state.query) {
      return;
    }
    const urlencoded = new URLSearchParams();
    urlencoded.append("per_page", "8");
    urlencoded.append("request[]", "total");
    urlencoded.append("request[]", "results");
    urlencoded.append("request[]", "details");
    urlencoded.append("request[]", "sort_options");
    urlencoded.append("request[]", "filters");
    urlencoded.append("identification[client_code]", "92D5626DBFD74912");
    urlencoded.append(
      "identification[api_key]",
      "5dff8cbc1c833937d5b6ff490de6639b"
    );
    urlencoded.append("identification[store_id]", "77435339050");
    yield put({ type: "FETCH_PRODUCT_LOADING" });
    const response = yield fetch(
      `https://api-r1.tagalys.com/v1/search?q=${state.query}&page=${state.pageNumber}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: urlencoded,
      }
    ).then((response) => response.json());
    yield put({ type: "FETCH_PRODUCT_SUCCESS", payload: response });
  } catch (error) {
    yield put({ type: "FETCH_PRODUCT_ERROR" });
  }
}

export function* searchSaga() {
  yield takeEvery("FETCH_PRODUCT_DETAIL", fetchProducts);
}
