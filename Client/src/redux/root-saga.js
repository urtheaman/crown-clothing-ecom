import { all, call } from "redux-saga/effects";
import { fetchDirectory } from "./directory/directory.sagas";
import { fetchShopData } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchShopData), call(fetchDirectory)]);
}
