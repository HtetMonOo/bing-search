import React from 'react';
import './VideoList.css';
import { Link } from 'react-router-dom';

const VideoList = ({videos, path}) => {

  console.log(videos);
  return (
    <div className="container mb-3">
      <div className="row">
      { 
      videos && 
      videos.map(video =>(
        <div className="col-lg-3 col-md-12 mb-2 column">
        <div className="card">
          <div className="view overlay">
            <img className="card-img-top" src={
              video.image ? video.image.thumbnailUrl : 
              (video.thumbnail.thumbnailUrl ? video.thumbnail.thumbnailUrl : video.thumbnailUrl) } alt={video.image ? video.image.description : "" }></img>
            <a href="#!">
              <div className="mask rgba-white-slight"></div>
            </a>
          </div>

          <div className="card-body">
            <p className="mb-2 font-weight-bold">{video.query ? video.query.displayText : (video.displayText ? video.displayText : video.name) }</p>
            <div className="d-flex" id="div">
              { video.image ? <p className="card-text">{video.image.headLine}</p> :
              <div>
                { video.creator && video.creator.name && <p className="card-text">creator : {video.creator.name}</p> }
                { video.publisher && video.publisher.map( pub => <p className="card-text">{pub.name} </p> )}
              </div>
              }
              {
                path === "from search" ?
                <Link to={`/search/videoDetail/${video.name}`} id="seeDetail">
                  <button id="seeDetail"  className="btn p-1" data-toggle="modal" data-target="#modal">See Detail &#62;&#62; </button>
                </Link> :
                <Link to={video.query ? `/videoDetail/${video.query.displayText}` : `/videoDetail/${video.displayText}`} id="seeDetail">
                  <button id="seeDetail"  className="btn p-1" data-toggle="modal" data-target="#modal">See Detail &#62;&#62; </button>
                </Link>
              }
            </div>
          </div>

        </div>
      </div>
            
      ))}
    
      </div>
    </div>
  )
};

export default VideoList;