import { createStore, applyMiddleware } from "redux";
//middleware to log to console
import logger from "redux-logger";
//used to cache store
import { persistStore } from "redux-persist";

import RootReducer from "./Root-Reducer";

//you can add multiple middleware to the array, which is why we write it this way
const middlewares = [logger];

//create the store and take in the reducers and middleware
export const store = createStore(RootReducer, applyMiddleware(...middlewares))

//persistor is a persisted version of our store
export const persistor = persistStore(store);

// export default {store, persistor};