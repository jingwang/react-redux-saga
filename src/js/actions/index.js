import {
    CREATE_USER, DATA_REQUESTED,
    DELETE_USER, ADD_USER, UPDATE_USER,
    DATA_LOADED, EDIT_USER
} from "./action-types";

export function addUser() {
    return {type: ADD_USER}
}

export function requestData() {
    return {type: DATA_REQUESTED}
}

export function deleteUser(id) {
    console.log(id);
    return {type: DELETE_USER, payload: {id: id}}
}

export function createUser(payload) {
    console.log(payload);
    return {type: CREATE_USER, payload}
}

export function updateUser(payload) {
    console.log(payload);
    return {type: UPDATE_USER, payload}
}

export function editUser(payload) {
    return {type: EDIT_USER, payload}
}

export function getData() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(json => {
                dispatch({ type: DATA_LOADED, payload: json });
            });
    };
}