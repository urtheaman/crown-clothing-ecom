import { getDataFromFirestore } from "../shop/shop.sagas";
import { takeEvery, call, put } from "redux-saga/effects";
import directoryActionTypes from "./directory.action-types";
import {
  onFetchDirectoryFailure,
  onFetchDirectorySuccess,
} from "./directory.action";

function* fetchDirectoryAsync() {
  try {
    const data = yield call(
      getDataFromFirestore,
      "directory",
      "Vc3BRUozBcNdUnhl5XL9"
    );
    yield put(onFetchDirectorySuccess(data.sections));
  } catch (err) {
    yield put(onFetchDirectoryFailure(err.message));
  }
}

export function* fetchDirectory() {
  yield takeEvery(
    directoryActionTypes.FETCH_DIR_DATA_START,
    fetchDirectoryAsync
  );
}
