import React from 'react';
import './VideoList.css';
import { Link } from 'react-router-dom';

const VideoList = ({videos}) => {

  return (
    <div className="container">
     {/* <!-- Grid row --> */}
    <div className="row">
    { 
    videos && 
    videos.map(video =>(
      <div className="col-lg-3 col-md-12 mb-2 column">
      <div className="card">
        <div className="view overlay">
          <img className="card-img-top" src={video.image.thumbnailUrl} alt={video.image.description}></img>
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body">
          <p className="mb-2 font-weight-bold">{video.query.displayText}</p>
          <div className="d-flex" id="div">
            <p className="card-text">{video.image.headLine}</p>
            <Link to={`/videoDetail/${video.query.displayText}`} id="seeDetail"><button id="seeDetail"  className="btn p-1" data-toggle="modal" data-target="#modal">See Detail &#62;&#62; </button></Link>
          </div>
        </div>

      </div>
    </div>
          
    ))}
  
    </div>
    {/* <!-- Grid row --> */}
    </div>
  )
};

export default VideoList;