import React from 'react'
import VideoDetail from './VideoDetail';

const Toshow = ({match}) => {
    const { videos } = match.params;
    return (
        <div>
            <VideoDetail videos={videos.titles} />
        </div>
    )
}

export default Toshow
