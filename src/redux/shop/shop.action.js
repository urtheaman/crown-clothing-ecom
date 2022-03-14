import shopActionTypes from "./shop.action-types";

export const setShopData = data => ({
    type: shopActionTypes.SET_SHOP_DATA,
    payload: data
})
