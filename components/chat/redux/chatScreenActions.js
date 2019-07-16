const ADD_QUOTE_TO_SCREEN = 'ADD_QUOTE_TO_SCREEN';
const ADD_TO_SCREEN = 'ADD_TO_SCREEN';
const INCREMENT_PROGRESS_BAR = 'INCREMENT_PROGRESS_BAR';
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