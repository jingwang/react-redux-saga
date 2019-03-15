import {ADD_USER, RESET_NEW_USER} from "../actions/action-types";

import {generateNewUser} from "../utils";

function newUserReducer(state = null, action) {
  switch (action.type) {
    case ADD_USER: {
      return Object.assign({}, state, {
        ...generateNewUser()
      });
    }
    case RESET_NEW_USER: {
      return null;
    }
    default:
      return state

  }
}
export default newUserReducer;