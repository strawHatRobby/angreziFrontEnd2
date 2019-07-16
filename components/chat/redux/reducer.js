import showNews from './actions';
const initialState = {
    showNewsModal: false,
    showVideo: false
}
export default chatBarReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_NEWS_MODAL':
        return {
            ...state,
            showNewsModal: !state.showNewsModal
        }
        default: 
        return state
    }
}
