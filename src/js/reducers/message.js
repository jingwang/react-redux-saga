import {MESSAGE} from "../actions/action-types";

function messageReducer(state = null, action) {
  switch (action.type) {
    case MESSAGE: {
      return Object.assign({}, state, {...action.payload});
    }
    default:
      return state

  }
}
export default messageReducer;