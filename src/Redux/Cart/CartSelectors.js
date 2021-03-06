import {createSelector} from "reselect";

//input selector
const selectCart = state => state.cart;

//cart items selector
export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

//count selector
export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems ? (cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0
    )):(null)
);

//hidden toggle selector
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

//total cart items value selector
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems ? (cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity * cartItem.price,
        0
    )):(null)
)