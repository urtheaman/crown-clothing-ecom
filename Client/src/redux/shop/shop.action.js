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