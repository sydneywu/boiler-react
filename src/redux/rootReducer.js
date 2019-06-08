import {combineReducers} from 'redux'
import {messageDuck} from './Ducks/messageDuck.js'
import {productDuck} from './Ducks/productDuck.js'
import {commentReducer} from './Ducks/commentDuck.js'

const rootReducer = combineReducers({
    messageReducer: messageDuck,
    productReducer: productDuck,
    commentReducer: commentReducer
});

export default rootReducer