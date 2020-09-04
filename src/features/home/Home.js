import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import VideoList from '../videos/VideoList';
import { getVideos } from '../videos/videoSlice'


const Home = () => {

  const videos = useSelector(getVideos);
  
 console.log(videos);
  return (
    <div className="Home">
      <h4 className="p-3">Trending</h4>
  { videos && <VideoList videos={videos.bannerTiles}></VideoList> }
    </div>
  );
}

export default Home;
