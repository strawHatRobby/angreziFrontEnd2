import {showNews, showModal, showVideo} from './actions';


const initialState = {
    showNewsModal: false,
    showVideoModal: true,
    showModal: false
}
export default chatBarReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_NEWS_MODAL':
        return {
            ...state,
            showNewsModal: false
        }
        case 'SHOW_VIDEO_MODAL':
        return {
            ...state,
            showVideoModal: false
        }
        case 'SHOW_MODAL':
                return {
                    ...state,
                    showModal: !state.showModal
                }
        default: 
        return state
    }
}
