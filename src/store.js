import {reducer} from './reducers'
import createSagaMiddleware from "redux-saga";
import rootSaga from "./ducks/sagas";
import rootReducer from "./ducks/root";
import {watcherSaga} from "./ducks/sagas.js";
import { createStore, applyMiddleware, compose } from "redux";
import { watcherMessage } from "./ducks/message.js";

const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    rootReducer,
    compose(applyMiddleware(sagaMiddleware))
);

//sagaMiddleware.run(watcherSaga);
//sagaMiddleware.run(watcherMessage);
sagaMiddleware.run(rootSaga);

export default store;