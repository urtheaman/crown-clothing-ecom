import { getDataFromFirestore } from "../../firebase/get-data.firestore";
import shopActionTypes from "./shop.action-types";

export const fetchShopDataStart = () => ({
  type: shopActionTypes.FETCH_DATA_START,
});

export const fetchShopDataSuccess = (collectionsMap) => ({
  type: shopActionTypes.FETCH_DATA_SUCCESS,
  payload: collectionsMap,
});

export const fetchShopDataFailure = (errorMessage) => ({
  type: shopActionTypes.FETCH_DATA_FAILURE,
  payload: errorMessage,
});

export const fetchShopDataAsync = () => {
  return (dispatch) => {
    dispatch(fetchShopDataStart());

    getDataFromFirestore("shop", "mt8a9SB0Xv8fIyqk7eSE")
      .then((data) => {
        dispatch(fetchShopDataSuccess(data));
      })
      .catch((err) => {
        dispatch(fetchShopDataFailure(err.message));
      });
  };
};
