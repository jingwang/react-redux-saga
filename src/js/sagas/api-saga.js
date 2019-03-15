import "regenerator-runtime/runtime";
import { takeEvery, call, put, all } from "redux-saga/effects";
import {DATA_LOADED, DATA_REFRESHED, REFRESH_DATA,
    CREATE_USER,
    DELETE_USER,
    DATA_REQUESTED, API_ERRORED} from "../actions/action-types";

const apiUrl = 'http://localhost:8081/api';

export default function* rootSaga() {
    yield all([
        requestDataWatcher(),
        refreshDataWatcher(),
        createUserWatcher(),
        deleteUserWatcher()
    ])
}

function* requestDataWatcher() {
    yield takeEvery(DATA_REQUESTED, requestDataWorker);
}
function* requestDataWorker() {
    try {
        const payload = yield call(requestData);
        yield put({ type: DATA_LOADED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function* refreshDataWatcher() {
    yield takeEvery(REFRESH_DATA, refreshDataWorker);
}
function* refreshDataWorker() {
    try {
        const payload = yield call(requestData);
        yield put({ type: DATA_REFRESHED, payload });
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function* createUserWatcher() {
    yield takeEvery(CREATE_USER, createUserWorker);
}
function* createUserWorker(action) {
    try {
        const payload = yield call(createUser, action.payload);
        yield put({type: REFRESH_DATA});
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function* deleteUserWatcher() {
    yield takeEvery(DELETE_USER, deleteUserWorker);
}
function* deleteUserWorker(action) {
    try {
        const res = yield call(deleteUser, action.payload.id);
        yield put({type: REFRESH_DATA});
    } catch (e) {
        yield put({ type: API_ERRORED, payload: e });
    }
}

function requestData() {
    return fetch(apiUrl + "/users").then(response =>
        response.json()
    );
}

function createUser(user) {
    return fetch(apiUrl + "/user", {
        method: "POST",
        mode: "cors", // no-cors, cors, *same-origin
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user), // body data type must match "Content-Type" header
    }).then(response => response.json()); // parses response to JSON
}

function deleteUser(id) {
    return fetch(apiUrl + "/user/" + id, {
        method: "DELETE",
        mode: "cors", // no-cors, cors, *same-origin
    }).then(response => response.text());
}