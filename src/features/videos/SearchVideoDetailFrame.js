import React from 'react'
import VideoDetail from './VideoDetail'
import { getSearch } from './videoSlice'
import { useSelector } from 'react-redux';

function SearchVideoDetailFrame({match}) {

    const searchData = useSelector(getSearch);
    
    if(searchData && searchData.value ){
        var video = searchData.value.find(vid => vid.name === match.params.videoName)
        var related = searchData.relatedSearches;
    }
    
    return (
        <>
        { (video || related) && <VideoDetail video={video} related={related}/> }
        </>
    )
}

export default SearchVideoDetailFrame;
