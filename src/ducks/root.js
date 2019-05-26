import {combineReducers} from 'redux'


import {messageReducer} from './message.js'

const rootReducer = combineReducers({
    messageReducer: messageReducer
});

export default rootReducer