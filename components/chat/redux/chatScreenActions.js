const ADD_QUOTE_TO_SCREEN = 'ADD_QUOTE_TO_SCREEN';
const ADD_TO_SCREEN = 'ADD_TO_SCREEN';
const INCREMENT_PROGRESS_BAR = 'INCREMENT_PROGRESS_BAR';
const USER_RESPONDED_WITH = 'USER_RESPONDED_WITH';

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