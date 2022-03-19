import { takeEvery, call, put } from "redux-saga/effects";
import { fetchShopDataFailure, fetchShopDataSuccess } from "./shop.action";
import shopActionTypes from "./shop.action-types";
import { getDoc, doc } from "firebase/firestore";
import { fireStoreDb } from "../../firebase/init.firebase";

export function* getDataFromFirestore(collectionName, docName) {
  try {
    const docRef = yield call(doc, fireStoreDb, collectionName, docName);
    const result = yield call(getDoc, docRef);
    const data = yield result.data();
    return data;
  } catch (err) {
    return err;
  }
}

function* fetchShopDataAsync() {
  try {
    const collectionsMap = yield call(
      getDataFromFirestore,
      "shop",
      "mt8a9SB0Xv8fIyqk7eSE"
    );
    yield put(fetchShopDataSuccess(collectionsMap));
  } catch (err) {
    yield put(fetchShopDataFailure(err.message));
  }
  // put is the saga Effect for creating actions.
  // it's require to yield something out of a generator function
  // call is a method which creates an effect that instructs the middleware to call the param function with the arguments.
  // call is the effect which invokes the method inside our generator function.
  // call is the method provided by redux-saga which takes a method as a param and subsequent arguments for the method provided as param.
}

export function* fetchShopData() {
  yield takeEvery(shopActionTypes.FETCH_DATA_START, fetchShopDataAsync);
}
