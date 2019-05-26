import { takeLatest, call, put, all } from "redux-saga/effects";
import {messageWatcher} from "./message"

export default function* rootSaga() {
    yield all([
        messageWatcher()
    ])
}