import {CREATE_USER, MESSAGE} from "../actions/action-types";
import {MESSAGE_TYPE_DANGER } from "../utils/constants";
const forbiddenWords = ["spam", "money"];
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_USER) {
                if (isBlank(action.payload.name)) {
                    return dispatch({ type: MESSAGE, payload: {type: MESSAGE_TYPE_DANGER, content: "empty name"}})
                }
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.name.includes(word)
                );
                if (foundWord.length) {
                    return dispatch({ type: MESSAGE, payload: {type: MESSAGE_TYPE_DANGER, content: "found bad word"}});
                }
            }
            return next(action);
        };
    };
}