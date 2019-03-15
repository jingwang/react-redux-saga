import {
  DATA_LOADED, DATA_REFRESHED
} from "../actions/action-types";

const initialState = [];


function usersReducer(state = initialState, action) {
  switch (action.type) {
    case DATA_LOADED:
    case DATA_REFRESHED: {
      return action.payload
    }
    default:
      return state

  }
}
export default usersReducer;