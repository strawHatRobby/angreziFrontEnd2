import {showNews, showModal, showVideo} from './actions';


const initialState = {
    showNewsModal: false,
    showVideoModal: false,
    showModal: false
}
export default chatBarReducer = (state = initialState, action ) => {
    switch(action.type){
        case 'SHOW_NEWS_MODAL':
        return {
            ...state,
            showNewsModal: action.payload
        }
        case 'SHOW_VIDEO_MODAL':
        return {
            ...state,
            showVideoModal: action.payload
        }
        case 'SHOW_MODAL':
                return {
                    ...state,
                    showModal: action.payload
                }
        default: 
        return state
    }
}
