const ADD_QUOTE_TO_SCREEN = 'ADD_QUOTE_TO_SCREEN';
const ADD_TO_SCREEN = 'ADD_TO_SCREEN';
export const addQouteToScreen = (payload) => {
    return {
        type: ADD_QUOTE_TO_SCREEN,
        payload
    }
}

export const addToScreen = (payload) => {
    return {
        type: ADD_TO_SCREEN,
        payload
    }
}