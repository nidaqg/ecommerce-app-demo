//root reducer pulls in all the different reducers in the app
//works like an index file

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import { userReducer } from "./User/User-Reducer";
import { cartReducer } from "./Cart/CartReducer";
import { directoryReducer } from "./Directory/Directory-Reducer";
import {shopReducer} from "./Shop/Shop-Reducer";

//define persist configuration
//white list is an array of all the things we want to persist. We do not persist
//user as that is being persisted by firebase already
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

//wrap reducers in persistReducer before exporting
export default persistReducer(persistConfig, rootReducer)
