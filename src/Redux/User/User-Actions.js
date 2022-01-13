//here we actually define the actions that will be used by the reducers
export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
})