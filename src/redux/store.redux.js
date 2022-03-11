import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import persistStore from "redux-persist/es/persistStore";

const middlewares = [logger];
export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistedStore = persistStore(store);
// we're creating persisted version of our store using this persistStroe function