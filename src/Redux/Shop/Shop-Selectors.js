import { createSelector } from "reselect";


const selectShop = (state) => state.shop;

//to get the collections for shop preview page
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

