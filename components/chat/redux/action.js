const SHOW_NEWS_MODAL = 'SHOW_NEWS_MODAL';
const SHOW_VIDEO_MODAL = 'SHOW_VIDEO_MODAL';
const SHOW_MODAL = 'SHOW_MODAL';

export const showNews = () => {
    return {
        type: SHOW_NEWS_MODAL
    }
}

export const showModal = () => {
    return {
        type: SHOW_MODAL
    }
}

export const showVideo = () => {
    return {
        type: SHOW_VIDEO_MODAL
    }
}

