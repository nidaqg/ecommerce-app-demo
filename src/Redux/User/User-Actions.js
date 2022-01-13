//here we actually define the actions that will be used by the reducers
import { UserActionTypes } from "./User-Types"
export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})