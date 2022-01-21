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
    cartItems => cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
        accumulatedQuantity + cartItem.quantity, 0
    )
);

//hidden toggle selector
export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);