import { combineReducers } from 'redux';
import chatScreenReducer from './chatScreenReducer';
import chatBarReducer from './chatBarReducer';

export default reducer = combineReducers({
    chatBar: chatBarReducer,
    chatScreen: chatScreenReducer
})

