import React from 'react';
import './VideoList.css';
import { Link } from 'react-router-dom';

const VideoList = (props) => {

  const arr = [ 1,2,3,4,5,6,7,8];
  return (
    <div className="container">
     {/* <!-- Grid row --> */}
    <div className="row">
    { 
    arr.map(ar =>(
      <div className="col-lg-3 col-md-12 mb-2 column">
      <div className="card">
        <div className="view overlay">
          <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Horizontal/Food/8-col/img (5).jpg" alt="Card image cap"></img>
          <a href="#!">
            <div className="mask rgba-white-slight"></div>
          </a>
        </div>

        <div className="card-body">
          <p className="mb-2 font-weight-bold">Lion React to the environent</p>
          <div className="d-flex" id="div">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/videoDetail"  id="seeDetail" ><button id="seeDetail"  className="btn p-1" data-toggle="modal" data-target="#modal">See Detail &#62;&#62; </button></Link>
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