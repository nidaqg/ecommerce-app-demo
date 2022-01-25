import { CartActionTypes } from "./CartTypes";

export const toggleCartHidden = () => ({
type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

export const clearItemsFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEMS_FROM_CART,
    payload: item
})

export const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})