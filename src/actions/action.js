export const fetchVideosSuccess = (videos) => {
    return {
        type: 'FETCH_VIDEOS_SUCCESS',
        payload: videos
    }
}

export const searchVideosSuccess = (videos) => {
    return {
        type: 'SEARCH_VIDEOS_SUCCESS',
        payload: videos
    }
}