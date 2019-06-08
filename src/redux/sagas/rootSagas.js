import { all } from "redux-saga/effects";
import {messageWatcher} from "./messageSaga"
import {productWatcher} from "../Ducks/productDuck"
import {fetchCommentsWatcher, createCommentWatcher, commentWatcher} from "./commentSaga"

export default function* rootSaga() {
    yield all([
        messageWatcher(),
        productWatcher(),
        //fetchCommentsWatcher(),
        //createCommentWatcher(),
        commentWatcher(),
    ])
}