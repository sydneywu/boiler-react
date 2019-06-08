import { takeLatest, call, put } from "redux-saga/effects";
import {getDog} from "../../repositories/message.js"

const FETCH_PRODUCT_IS_LOADING = "FETCH_PRODUCT_IS_LOADING";
const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
const FETCH_PRODUCT_FAIL = "FETCH_PRODUCT_FAIL";
const FETCH_PRODUCT_ACTION = "FETCH_PRODUCT_ACTION";

const initialState = {
    fetching: false,
    product: "",
    error: ""
};

export function productDuck(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_IS_LOADING:
            return { ...state, fetching: true, error: null };
        case FETCH_PRODUCT_SUCCESS:
            return { ...state, fetching: false, product: action.product };
        case FETCH_PRODUCT_FAIL:
            return { ...state, fetching: false, product: null, error: action.error };
        default:
            return state;
    }
}

export function* productWatcher() {
    yield takeLatest(FETCH_PRODUCT_ACTION, productWorker);
}

function* productWorker() {
    try {
        const response = yield call(getDog);
        const product = response.data.message;
        // dispatch a success action to the store with the new dog
        yield put({ type: FETCH_PRODUCT_SUCCESS, product });

    } catch (error) {
        // dispatch a failure action to the store with the error
        yield put({ type: FETCH_PRODUCT_FAIL, error });
    }
}