import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './VideoDetail.css';
import { search } from '../../.utils';

const VideoDetail = ({match}) => {
    const { videoName } = match.params
    console.log(videoName);
    const url = search(videoName)+"&count=1";
    const [ video, setVideo ] = useState({});

    useEffect(()=>{
        fetchVideoDetail();
    }, [])
    
    const fetchVideoDetail = async() => {
        const response = await Axios.get(url);
        if (response.data && response.data.value){
            setVideo(response.data.value);
            console.log(response.data.value);
        }else {
            setVideo({})
        }
    }
    const iframeUrl = (raw) => {
        const newUrl = raw.replace("watch?v=", "embed/");
        return (newUrl+"?autoplay=1");
    }
    console.log(video);
    return (
        <>
        { video[0] && video[0].hostPageDisplayUrl ?
        <div className="VideoDetail mx-2">
            <div className="iframe-container d-flex flex-column justify-content-center w-100">
                <iframe src={iframeUrl(video[0].hostPageDisplayUrl)} frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="card mb-5 mt-1 w-100 p-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img" width="100%" src={video[0].thumbnailUrl}></img>

                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{video[0].name}</h5>
                        <p className="card-text">{video[0].description}</p>
                        <p className="card-text"><small className="text-muted">Creator : {video[0].creator.name}</small></p>
                        <p className="card-text"><small className="text-muted">Release : {video[0].datePublished.substring(0,10)}</small></p>
                        <p className="card-text"><small className="text-muted">Viewer : {video[0].viewCount}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div> : " "
        }
        </>
    )
    
}

export default VideoDetail;
