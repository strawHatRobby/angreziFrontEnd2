import { addQouteToScreen } from './chatScreenActions';

const initialState = {
    qoutes: '',
    chatScreenContent: []
}

export default chatScreenReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'ADD_TO_SCREEN':
            return {
                ...state,
                chatScreenContent: [...state.chatScreenContent, action.payload]
            }
        case 'ADD_QUOTE_TO_SCREEN':
            return {
                ...state,
                quotes: action.payload
            }
            
        default:
            return state
    }
}

