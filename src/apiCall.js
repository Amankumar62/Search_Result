import { put } from "redux-saga/effects";
import { fetchProductLoading, fetchProductError } from "./actions";
function* apiCall(query) {
  try {
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
    yield put(fetchProductLoading());
    const response = fetch(query, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: urlencoded,
    }).then((response) => response.json());
    return response;
  } catch (error) {
    yield put(fetchProductError());
  }
}

export default apiCall;
