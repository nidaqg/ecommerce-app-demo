import { ShopActionsTypes } from "./ShopTypes";


export const updateCollections = (collectionsMap) => ({
    type: ShopActionsTypes.UPDATE_COLLECTIONS,
    payload: collectionsMap
})