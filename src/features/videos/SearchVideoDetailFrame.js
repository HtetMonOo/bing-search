import React from 'react'
import VideoDetail from './VideoDetail'
import { getSearch } from './videoSlice'
import { useSelector } from 'react-redux';

function SearchVideoDetailFrame({match}) {

    const searchData = useSelector(getSearch);
    console.log( searchData );
    
    if(searchData && searchData.value ){
        console.log(searchData.value)
    var video = searchData.value.find(vid => vid.name === match.params.videoName)
    console.log(video);
    var related = searchData.relatedSearches;
    console.log(related);
}
    
    return (
        <>
        { video && related && <VideoDetail video={video} related={related}/> }
        </>
    )
}

export default SearchVideoDetailFrame;
