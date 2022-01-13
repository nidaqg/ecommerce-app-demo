import { CartActionTypes } from "./CartTypes";
//import utility function
import { addItemToCart } from "./CartUtils";

const INITIAL_STATE = {
    hidden: true,
    cartItems:[]
}

//take in initial state and toggle boolean on state change
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
            case CartActionTypes.ADD_ITEM:
                return {
                    ...state,
                    cartItems: addItemToCart(state.cartItems,action.payload)
                }
        default:
            return state;
    }
}

