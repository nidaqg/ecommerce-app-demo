import { CartActionTypes } from "./CartTypes";

const INITIAL_STATE = {
    hidden: true
}

//take in initial state and toggle boolean on state change
export const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

