import { addQouteToScreen } from './chatScreenActions';

const initialState = {
    qoutes: '',
}

export default chatScreenReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'ADD_QUOTE_TO_SCREEN':
            return {
                ...state,
                quotes: action.payload
            }
        default:
            return state
    }
}