import "regenerator-runtime/runtime";
import { takeEvery, call, put, all } from "redux-saga/effects";
import {DATA_LOADED, DATA_REQUESTED, API_ERRORED} from "../actions/action-types";

export default function* rootSaga() {
    yield all([
        watcherSaga()
    ])
}

function* watcherSaga() {
    yield takeEvery(DATA_REQUESTED, workerSaga);
}
function* workerSaga() {
    try {
        const payload = yield call(getData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function getData() {
    return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
        response.json()
    );
}