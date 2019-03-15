import {
    FOUND_BAD_WORD,
    DATA_LOADED, DATA_REFRESHED, API_ERRORED, EMPTY_NAME
} from "../actions/action-types";
import {MESSAGE_TYPE_DANGER, MESSAGE_TYPE_SUCCESS} from "../constants";

const initialState = {
    users: [],
    message: undefined
};

function rootReducer(state = initialState, action) {

    switch (action.type) {
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
                message: {type: MESSAGE_TYPE_SUCCESS, content: DATA_LOADED}
            });
        }
        case DATA_REFRESHED: {
            return Object.assign({}, state, {
                users: action.payload,
                message: {type: MESSAGE_TYPE_SUCCESS, content: DATA_REFRESHED}
            });
        }
        case API_ERRORED: {
            return Object.assign({}, state, {
                message: {type: MESSAGE_TYPE_DANGER, content: API_ERRORED}
            });
        }
        default:
            return state

    }
}
export default rootReducer;