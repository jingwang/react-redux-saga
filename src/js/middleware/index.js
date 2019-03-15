import { CREATE_USER, FOUND_BAD_WORD, EMPTY_NAME } from "../actions/action-types";
const forbiddenWords = ["spam", "money"];
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}
export function forbiddenWordsMiddleware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === CREATE_USER) {
                if (isBlank(action.payload.name)) {
                    return dispatch({type: EMPTY_NAME})
                }
                const foundWord = forbiddenWords.filter(word =>
                    action.payload.name.includes(word)
                );
                if (foundWord.length) {
                    return dispatch({ type: FOUND_BAD_WORD });
                }
            }
            return next(action);
        };
    };
}