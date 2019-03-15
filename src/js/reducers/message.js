import {MESSAGE, CLEAR_MESSAGE} from "../actions/action-types";

function messageReducer(state = null, action) {
  switch (action.type) {
    case MESSAGE: {
      return Object.assign({}, state, {...action.payload});
    }
    case CLEAR_MESSAGE: {
      return null;
    }
    default:
      return state
  }
}
export default messageReducer;