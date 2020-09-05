import React, { useState, useEffect} from 'react'
import VideoDetail from './VideoDetail';
import Axios from 'axios';
import { search } from '../../.utils';
import { Loader } from 'rsuite';

function VideoDetailFrame({match}) {

    const url = videoName => search(videoName)+"&count=1";
    const [ video, setVideo ] = useState([]);
    const [ related, setRelated] = useState([]);
    const [ pending, setPending ] = useState(false);

    useEffect(()=>{
        fetchVideoDetail(match.params.videoName);
    }, [match.params.videoName])
    
    const fetchVideoDetail = async(videoName) => {
        setPending(true);
        const response = await Axios.get(url(videoName));
        if (response.data && response.data.value){
            setVideo(response.data.value);
            setRelated(response.data.relatedSearches);
            setPending(false);
        }else {
            setVideo([]);
            setRelated([]);
            setPending(false)
        }
    }
    
    return (
        <>
            {
                pending ? <Loader /> : <VideoDetail video={video[0]} related={related}/>
            }
        </>
        
    )
}

export default VideoDetailFrame;
