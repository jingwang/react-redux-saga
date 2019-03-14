import {ADD_ARTICLE,
    FOUND_BAD_WORD,
    DATA_LOADED,
API_ERRORED} from "../actions/action-types";

const initialState = {
    articles: [],
    remoteArticles: [],
    message: ''
};
function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    } else if (action.type === FOUND_BAD_WORD ) {
        return Object.assign({}, state, {
            message: "found bad word"
        });
    } else if (action.type === DATA_LOADED) {
        return Object.assign({}, state, {
            articles: state.remoteArticles.concat(action.payload)
        });
    } else if (action.type === API_ERRORED) {
        return Object.assign({}, state, {
            message: "api errored"
        });
    }
    return state;
};
export default rootReducer;