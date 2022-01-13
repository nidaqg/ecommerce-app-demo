//root reducer pulls in all the different reducers in the app
//works like an index file

import { combineReducers } from "redux";
import { userReducer } from "./User/User-Reducer";

//route to relevant reducer file based on key
export default combineReducers({
    user:userReducer
})
