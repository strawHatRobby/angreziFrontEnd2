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
    currentWordSynonyms: [],
    currentWordSentences: [],
    inTutorial: true,
    exampleCounter: 0,
    tutorialMode: null
}

export default chatScreenReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SET_TUTORIAL_TO':
            return {
                ...state,
                tutorialMode: action.payload
            }
        case 'INCREMENT_OPTION_COUNTER':
            newCounter = state.exampleCounter + 1
        return {
                ...state,
                exampleCounter: newCounter
            }
        case 'GET_WORD':
            return {
                ...state
            }
        case 'IN_TUTORIAL':
            return {
                ...state,
                inTutorial: action.done
            }
        case 'SET_WORD':
            return {
                ...state,
                wordData: action.payload,
                currentWord: action.payload.word,
                currentWordNews: action.payload.news,
                currentWordVideos: action.payload.videos
            }
        case 'GET_QUOTE':
            return {
            ...state
            }
        case 'REMOVE_QUOTE':
            let currentQuotes = state.wordData.quotes
            currentQuotes.splice(0,1)
            return {
                ...state,
                currentWordData: {...state.currentWordData, quotes:currentQuotes}
            }
        case 'REMOVE_SENTENCE':
                let currentSentence = state.wordData.sentences
                currentSentence.splice(0,1)
                return {
                    ...state,
                    currentWordData: {...state.currentWordData, sentences:currentSentence}
                }
        case 'REMOVE_SYNONYM':
                let currentSynonym = state.wordData.synonyms
                currentSynonym.splice(0,1)
                return {
                    ...state,
                    currentWordData: {...state.currentWordData, synonyms:currentSynonyms}
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

