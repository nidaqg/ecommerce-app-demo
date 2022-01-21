import { createSelector } from "reselect";

const selectUser = state => state.user;

//order is important when passing in selectors
export const selectCurrentUser = createSelector(
[selectUser],
(user) => user.currentUser
    );