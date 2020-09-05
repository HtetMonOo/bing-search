import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import VideoList from './VideoList';
import { useDispatch } from 'react-redux';
import { searchVideosSuccess } from './videoSlice';
import { search } from '../../.utils';
import { Loader } from 'rsuite';

function SearchVideoListFrame({match}) {
       
        const dispatch = useDispatch();
        const { searchTerm } = match.params
        console.log(searchTerm);
        const url = search(searchTerm);
        
        const [ videos, setVideos ] = useState([]);
        const [ pending, setPending ] = useState(false);


        useEffect(()=>{
            searchVideos();
        }, [])
    
    const searchVideos = async() => {
        setPending(true);
        try{
            const response = await Axios.get(url);
            dispatch(searchVideosSuccess(response.data));
            setVideos(response.data.value);
            setPending(false);
        }catch {
            setVideos([]);
            setPending(false);
        }
    }

    if (!videos) {
      return (
        <section>
          <h2>Videos not found!</h2>
        </section>
      )
    }
    
  return (
      <div>
        {
          pending ? <Loader /> :
          <VideoList videos={videos} path="from search"/> 
        }
      </div>
  )
}

export default SearchVideoListFrame;
