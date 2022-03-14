import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from 'redux-thunk'
import persistStore from "redux-persist/es/persistStore";

const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistedStore = persistStore(store);
// we're creating persisted version of our store using this persistStroe function