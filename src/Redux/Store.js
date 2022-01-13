import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import RootReducer from "./Root-Reducer";

//you can add multiple middleware to the array, which is why we write it this way
const middlewares = [logger];

//create the store and take in the reducers and middleware
const store = createStore(RootReducer, applyMiddleware(...middlewares))

export default store;