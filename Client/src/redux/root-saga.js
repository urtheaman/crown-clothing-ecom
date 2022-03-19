import { all, call } from "redux-saga/effects";
import { fetchDirectory } from "./directory/directory.sagas";
import { fetchShopData } from "./shop/shop.sagas";
import { userSagas } from "./user/user-sagas";

export default function* rootSaga() {
  yield all([call(fetchShopData), call(fetchDirectory), call(userSagas)]);
}
