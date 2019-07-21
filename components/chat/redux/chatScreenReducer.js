import { addQuoteToScreen } from './chatScreenActions';

const initialState = {
    quotes: '',
    chatScreenContent: [],
    progress: 0,
    userSelected: '',
    showExamplesType: false,
    wordData: null,
    currentWord: null,
    currentWordVideos: [],
    currentWordNews: [],
    currentWordQuotes: [],
    currentWordSynonyms: [],
    currentWordSentences: [],
}

export default chatScreenReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'GET_WORD':
            return {
                ...state
            }
        
        case 'SET_WORD':
            return {
                ...state,
                wordData: action.payload,
                currentWord: action.payload.word,
                currentWordNews: action.payload.news,
                currentWordVideos: action.payload.videos,
                currentWordQuotes: action.payload.quotes
            }
        case 'GET_QUOTE':
            return {
                ...state
            }
        case 'REMOVE_QUOTE':
            let currentQuotes = state.currentWordQuotes
            currentQuotes.splice(action.payload,1)
            return {
                ...state,
                currentWordQuotes: currentQuotes
            }
        case 'REMOVE_SENTENCE':
                let currentSentence = state.wordData.sentences
                currentSentence.splice(0,1)
                return {
                    ...state,
                    currentWordData: {...state.currentWordData, sentences:currentSentence}
                }
        case 'REMOVE_SYNONYM':
                let currentSynonym = state.currentWordSynonyms
                currentSynonym.splice(action.payload,1)
                return {
                    ...state,
                    currentWordQuotes: currentSynonym
                }
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
        case 'INCREMENT_PROGRESS_BAR':
            if (state.progress < 100){
                const newProg = state.progress + 10;
                return {
                    ...state,
                    progress: newProg
                }
            }
            else {
                const newProg = state.progress;
                return {
                    ...state,
                    progress: newProg
                }   
            }
        case 'USER_RESPONDED_WITH':
            return {
                ...state,
                userSelected: action.payload   
            }
        case 'SHOW_EXAMPLE_TYPES':
            return {
                ...state,
                showExamplesType: action.payload
            }
        default:
            return state
    }
}

