import {showNews, showVideo} from './actions';

const initialState = {
    showNewsModal: false,
    showVideoModal: false
}
export default chatBarReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_NEWS_MODAL':
        return {
            ...state,
            showNewsModal: !state.showNewsModal
        }
        case 'SHOW_VIDEO_MODAL':
            console.log('SHOW_VIDEO clicked');
        return {
            ...state,
            showVideoModal: !state.showVideoModal
        }
        default: 
        return state
    }
}
