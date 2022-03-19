import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";
import persistStore from "redux-persist/es/persistStore";
import rootSaga from "./root-saga";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistedStore = persistStore(store);
// we're creating persisted version of our store using this persistStroe function

sagaMiddleware.run(rootSaga);
