import { UserActionTypes } from "./User-Types";
//set initial state, like useState setting initial state
const INITIAL_STATE = {
  currentUser: null,
};

//when this reducer gets fired, it takes in the action, checks of the action matches
//and if it does, does something with the payload
//in this case it sets currentUser
export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};

