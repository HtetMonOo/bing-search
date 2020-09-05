import React, { useState, useEffect} from 'react'
import VideoDetail from './VideoDetail';
import Axios from 'axios';
import { search } from '../../.utils';

function VideoDetailFrame({match}) {

    const { videoName } = match.params
    console.log(videoName);
    const url = search(videoName)+"&count=1";
    const [ video, setVideo ] = useState({});
    const [ related, setRelated] = useState([]);

    useEffect(()=>{
        fetchVideoDetail();
    }, [])
    
    const fetchVideoDetail = async() => {
        const response = await Axios.get(url);
        if (response.data && response.data.value){
            setVideo(response.data.value);
            setRelated(response.data.relatedSearches);
            console.log(response.data);
        }else {
            setVideo({});
            setRelated([]);
        }
    }
    return (
        <VideoDetail video={video[0]} related={related}/>
    )
}

export default VideoDetailFrame;
