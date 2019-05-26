import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

// action types
const FETCH_MESSAGE_REQUEST = "FETCH_MESSAGE_REQUEST";
const FETCH_MESSAGE_SUCCESS = "FETCH_MESSAGE_SUCCESS";
const FETCH_MESSAGE_FAIL = "FETCH_MESSAGE_FAIL";
const API_MESSAGE_REQUEST = "API_MESSAGE_REQUEST";

// reducer with initial state
const initialState = {
    fetching: false,
    message: "",
    error: ""
};

export function messageReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_MESSAGE_REQUEST:
            return { ...state, fetching: true, error: null };
        case FETCH_MESSAGE_SUCCESS:
            return { ...state, fetching: false, message: action.message };
        case FETCH_MESSAGE_FAIL:
            return { ...state, fetching: false, message: null, error: action.error };
        default:
            return state;
    }
}

// watcher saga: watches for actions dispatched to the store, starts worker saga
export function* messageWatcher() {
    yield takeLatest(API_MESSAGE_REQUEST, messageWorker);
}

// function that makes the api request and returns a Promise for response
function fetchMessage() {
    return axios({
        method: "get",
        url: "https://dog.ceo/api/breeds/image/random"
    });
}

// worker saga: makes the api call when watcher saga sees the action
function* messageWorker() {
    try {
        const response = yield call(fetchMessage);
        const message = response.data.message;
        // dispatch a success action to the store with the new dog
        yield put({ type: FETCH_MESSAGE_SUCCESS, message });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: FETCH_MESSAGE_FAIL, error });
    }
}