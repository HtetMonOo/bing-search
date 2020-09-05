import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './VideoDetail.css';
import { search } from '../../.utils';
import VideoList from './VideoList';

const VideoDetail = ({video, related}) => {
    
    const iframeUrl = (raw) => {
        const newUrl = raw.replace("watch?v=", "embed/");
        return (newUrl+"?autoplay=1");
    }
     console.log(related);
    return (
        <>
        { video && video.hostPageDisplayUrl ?
        <div className="VideoDetail mx-2">
            <div className="iframe-container d-flex flex-column justify-content-center w-100">
                <iframe src={iframeUrl(video.hostPageDisplayUrl)} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card mb-5 mt-1 w-100 p-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img" width="100%" src={video.thumbnailUrl}></img>

                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{video.name}</h5>
                        <p className="card-text">{video.description}</p>
                        <p className="card-text"><small className="text-muted">Creator : {video.creator.name}</small></p>
                        <p className="card-text"><small className="text-muted">Release : {video.datePublished.substring(0,10)}</small></p>
                        <p className="card-text"><small className="text-muted">Viewer : {video.viewCount}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div> : " "
        }
        { related && <VideoList videos={related}/>}
        </>
    )
    
}

export default VideoDetail;
