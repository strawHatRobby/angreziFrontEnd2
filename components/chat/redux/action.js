const SHOW_NEWS_MODAL = 'SHOW_NEWS_MODAL';
const SHOW_VIDEO_MODAL = 'SHOW_VIDEO_MODAL';
const SHOW_MODAL = 'SHOW_MODAL';

export const showNews = (payload) => {
    return {
        type: SHOW_NEWS_MODAL,
        payload
    }
}

export const showModal = (payload) => {
    return {
        type: SHOW_MODAL,
        payload
    }
}

export const showVideo = (payload) => {
    return {
        type: SHOW_VIDEO_MODAL,
        payload
    }
}

