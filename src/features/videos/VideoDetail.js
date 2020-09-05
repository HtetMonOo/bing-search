import React from 'react'
import './VideoDetail.css';

import VideoList from './VideoList';

const VideoDetail = ({video, related}) => {
    
    const iframeUrl = (raw) => {
        var newUrl;
        if(raw.indexOf("watch?v=") !== -1){
          newUrl = raw.replace("watch?v=", "embed/");
        }else {
            newUrl = raw.replace("vimeo.com","player.vimeo.com/video")
        } 
        console.log(newUrl);
        return (newUrl+"?autoplay=1");
    }

    return (
        <>
        { video && video.hostPageDisplayUrl ?
        <div className="VideoDetail mx-2">
            <div className="iframe-container d-flex flex-column justify-content-center w-100">
            <iframe src={iframeUrl(video.hostPageDisplayUrl)} frameBorder="0" allowFullScreen></iframe>
            </div>
            <div className="card mb-3 mt-1 w-100 p-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img" width="100%" src={video.thumbnailUrl}></img>

                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        { video.name && <h5 className="card-title">{video.name}</h5> }
                        { video.description && <p className="card-text">{video.description}</p> }
                        { video.creator && video.creator.name && <p className="card-text"><small className="text-muted">Creator : {video.creator.name}</small></p> }
                        { video.datePublished && <p className="card-text"><small className="text-muted">Release : {video.datePublished.substring(0,10)}</small></p> }
                        { video.viewCount && <p className="card-text"><small className="text-muted">Viewer : {video.viewCount}</small></p> }
                    </div>
                    </div>
                </div>
            </div>
        </div> : " "
        }
        { related && 
        <div>
            <h5 className="p-3" style={{textAlign: "left"}}>Related Videos...</h5>
            <VideoList videos={related}/>
        </div>
        }
        </>
    )
    
}

export default VideoDetail;
