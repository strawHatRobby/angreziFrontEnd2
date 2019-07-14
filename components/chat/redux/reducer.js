import showNews from './actions';
const initialState = {
    showNews: false,
    showVideo: false
}
export default chatBarReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_NEWS_MODAL':
        return {
            ...state,
            showNews: !state.showNews
        }
        default: 
        return state
    }
}
