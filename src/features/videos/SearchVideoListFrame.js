import React, {useState, useEffect} from 'react'
import Axios from 'axios';
import VideoList from './VideoList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideosPending, fetchVideosError, getSearch, getVideosPending, getVideosError, searchVideosSuccess } from './videoSlice';
import { search } from '../../.utils';
import  Loader from '../../app/Loader';

function SearchVideoListFrame({match}) {
       
        const dispatch = useDispatch();
        const { searchTerm } = match.params
        console.log(searchTerm);
        const url = search(searchTerm);
        
        const [ videos, setVideos ] = useState([]);
        const [ pending, setPending ] = useState(useSelector(getVideosPending));
        const [ error, setError ] = useState(useSelector(getVideosError));


        useEffect(()=>{
            searchVideos();
        }, [])
    
    const searchVideos = async() => {
        dispatch(fetchVideosPending());
        try{
            const response = await Axios.get(url);
            dispatch(searchVideosSuccess(response.data));
            setVideos(response.data.value);
            console.log(response.data);
        }catch {
            dispatch(fetchVideosError(error));
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
          <div>
          <h4 className="p-3">Result for "{searchTerm}"</h4>
          <VideoList videos={videos} path="from search"/> 
          </div>
        }
      </div>
  )
}

export default SearchVideoListFrame;
