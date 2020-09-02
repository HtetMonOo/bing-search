import React from 'react';
import './VideoList.css';

const VideoList = (props) => {

  const arr = [ 1,2,3,4,5];
  return (
    <div className="container">
     {/* <!-- Grid row --> */}
    <div className="row">
    { 
    arr.map(ar =>(
      <div className="col-lg-3 col-md-12 mb-2 column">
    
        {/* <!--Modal: Name--> */}
        <div className="modal fade" id="modal1" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg" role="document">
            {/* <!--Content--> */}
            <div className="modal-content">
              {/* <!--Body--> */}
              <div className="modal-body mb-0 p-0">
                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/A3PDXmYoF5U"
                    allowfullscreen></iframe>
                  <iframe className="embed-responsive-item" src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg" allowfullscreen></iframe>
                </div>    
              </div>    
              {/* <!--Footer--> */}
              <div className="modal-footer justify-content-center">
                <span className="mr-4">Spread the word!</span>
                <a type="button" className="btn-floating btn-sm btn-fb"><i className="fab fa-facebook-f"></i></a>
                <a type="button" className="btn-floating btn-sm btn-tw"><i className="fab fa-twitter"></i></a>
                <a type="button" className="btn-floating btn-sm btn-gplus"><i className="fab fa-google-plus-g"></i></a>
                <a type="button" className="btn-floating btn-sm btn-ins"><i className="fab fa-linkedin-in"></i></a>    
                <button type="button" className="btn btn-outline-primary btn-rounded btn-md ml-4" data-dismiss="modal">Close</button>    
              </div>   
            </div>
            {/* <!--/.Content--> */}    
          </div>
        </div>
        {/* <!--Modal: Name--> */}

        

      <div className="card" data-toggle="modal" data-target="#modal1">
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
            <button id="seeDetail" className="btn p-1">See Detail &#62;&#62; </button>
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