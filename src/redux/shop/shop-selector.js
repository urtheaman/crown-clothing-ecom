import { createSelector } from "reselect";

export const selectShop = (state) => state.shop

export const selectShopItems = createSelector(selectShop, shop => {
    return shop.collections
})

// export const selectCategory = categoryId => createSelector(selectShopItems, shopItems => {
//     return shopItems[categoryId]
// })
