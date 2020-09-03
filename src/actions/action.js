

export const fetchVideosPending = () => {
    return {
        type: 'FETCH_VIDEOS_PENDING'
    }
}

export const fetchVideosSuccess = (videos) => {
    return {
        type: 'FETCH_VIDEOS_SUCCESS',
        payload: videos
    }
}

export const fetchVideosError = (error) => {
    return {
        type: 'FETCH_PVIDEOS_ERROR',
        error: error
    }
}