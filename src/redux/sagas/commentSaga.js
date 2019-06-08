import { takeLatest, call, put, all } from "redux-saga/effects";
import {getComments, createComment} from "../../repositories/commentRepository";
import {
    commentConst,
    fetchCommentsSuccess, fetchCommentsFail
} from "../Ducks/commentDuck"

export function* fetchCommentsWatcher() {
    yield takeLatest(commentConst.FETCH_COMMENTS_ACTION, fetchCommentsWorker)
}

function* fetchCommentsWorker() {
    yield put ({type: commentConst.FETCH_COMMENTS_IS_LOADING});
        const commentsResp = yield call(getComments);
        console.log(commentsResp)
        console.log(JSON.stringify(commentsResp))
        if(commentsResp.success) yield put(fetchCommentsSuccess(commentsResp.data));
        if(!commentsResp.success) yield put(fetchCommentsFail(commentsResp.error))
}

export function* createCommentWatcher() {
    yield takeLatest(commentConst.CREATE_COMMENT_ACTION, createCommentWorker)
}

function* createCommentWorker(action) {
    yield put({type: commentConst.CREATE_COMMENT_IS_LOADING});
    try {
        const comment = yield call(createComment, action.payload.comment);
        yield put({type: commentConst.CREATE_COMMENT_SUCCESS, payload: {comment: comment}});
    } catch (error) {
        yield put({type: commentConst.CREATE_COMMENT_FAIL, payload: {error: error}});
    }
}

export function* commentWatcher() {
    yield all([
        fetchCommentsWatcher(),
        createCommentWatcher(),
    ])
}