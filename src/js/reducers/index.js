import {
    EDIT_USER, FOUND_BAD_WORD, ADD_USER,
    DATA_LOADED, DATA_REFRESHED, API_ERRORED, EMPTY_NAME
} from "../actions/action-types";

import {MESSAGE_TYPE_DANGER, MESSAGE_TYPE_SUCCESS} from "../utils/constants";
import {generateNewUser} from "../utils";

const initialState = {
    users: [],
    editUser: undefined,
    newUser: undefined,
    message: undefined
};


function rootReducer(state = initialState, action) {

    switch (action.type) {
        case ADD_USER: {
            return Object.assign({}, state, {
                newUser: generateNewUser()
            });
        }
        case EDIT_USER: {
            return Object.assign({}, state, {
                editUser: action.payload
            });
        }
        case FOUND_BAD_WORD: {
            return Object.assign({}, state, {
                message: {type: MESSAGE_TYPE_DANGER, content: "found bad word"}
            });
        }
        case EMPTY_NAME: {
            return Object.assign({}, state, {
                message: {type: MESSAGE_TYPE_DANGER, content: "empty name"}
            });
        }
        case DATA_LOADED: {
            return Object.assign({}, state, {
                users: action.payload,
                editUser: undefined,
                newUser: undefined,
                message: {type: MESSAGE_TYPE_SUCCESS, content: DATA_LOADED}
            });
        }
        case DATA_REFRESHED: {
            return Object.assign({}, state, {
                users: action.payload,
                editUser: undefined,
                newUser: undefined,
                message: {type: MESSAGE_TYPE_SUCCESS, content: DATA_REFRESHED}
            });
        }
        case API_ERRORED: {
            return Object.assign({}, state, {
                message: {type: MESSAGE_TYPE_DANGER, content: action.payload}
            });
        }
        default:
            return state

    }
}
export default rootReducer;