import {
  EDIT_USER, RESET_EDIT_USER
} from "../actions/action-types";

function editUserReducer(state = null, action) {
  switch (action.type) {
    case EDIT_USER: {
      return Object.assign({}, state, {
        ...action.payload
      });
    }
    case RESET_EDIT_USER: {
      return null;
    }
    default:
      return state

  }
}
export default editUserReducer;