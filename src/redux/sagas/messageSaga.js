import { takeLatest, call, put } from "redux-saga/effects";
import {getDog} from "../../repositories/message";
import {
    FETCH_MESSAGE_ACTION,
    FETCH_MESSAGE_SUCCESS,
    FETCH_MESSAGE_FAIL
} from "../Ducks/messageDuck"

export function* messageWatcher() {
    yield takeLatest(FETCH_MESSAGE_ACTION, messageWorker);
}

// worker saga: makes the api call when watcher saga sees the action
function* messageWorker() {
    try {
        const response = yield call(getDog);
        const message = response.data.message;
        // dispatch a success action to the store with the new dog
        yield put({ type: FETCH_MESSAGE_SUCCESS, message });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: FETCH_MESSAGE_FAIL, error });
    }
}