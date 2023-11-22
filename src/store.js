import { createStore, applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";
import { searchSaga } from "./searchSagas";
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(searchReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(searchSaga);

export default store;
