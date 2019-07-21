const ADD_QUOTE_TO_SCREEN = 'ADD_QUOTE_TO_SCREEN';
const ADD_TO_SCREEN = 'ADD_TO_SCREEN';
const INCREMENT_PROGRESS_BAR = 'INCREMENT_PROGRESS_BAR';
const USER_RESPONDED_WITH = 'USER_RESPONDED_WITH';
const SHOW_EXAMPLE_TYPES = 'SHOW_EXAMPLE_TYPES'
const GET_QUOTE = 'GET_QUOTE';
const GET_WORD = 'GET_WORD';
const SET_WORD = 'SET_WORD';

export const setWord = (payload) => {
    return {
        type: SET_WORD,
        payload
    }
}
export const removeQuote = (payload) => {
    return {
        type: 'REMOVE_QUOTE',
        payload
    }
}


export const getWordData = (word) => {
    return {
        type: GET_WORD,
        word
    }
}
export const showExampleType = (payload) => {
    return {
        type: SHOW_EXAMPLE_TYPES,
        payload
    }
}

export const getQuote = () => {
    return {
        type: GET_QUOTE
    }
}

export const userRespondedWith = (payload) => {
    return {
        type: USER_RESPONDED_WITH,
        payload
    }
}

export const addQuoteToScreen = (payload) => {
    return {
        type: ADD_QUOTE_TO_SCREEN,
        payload
    }
}

export const incrementProgressBar = () => {
    return {
        type: INCREMENT_PROGRESS_BAR
    }
}

export const addToScreen = (payload) => {
    return {
        type: ADD_TO_SCREEN,
        payload
    }
}