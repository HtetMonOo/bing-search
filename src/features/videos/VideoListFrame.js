import React from 'react'
import VideoList from './VideoList';
import { useSelector } from 'react-redux';
import { getVideos } from './videoSlice';

const VideoListFrame = ({match}) => {

      const allVideos = useSelector(getVideos); 
        
        if( allVideos && allVideos.categories ) {
            const category = allVideos.categories.find( cat => cat.title === match.params.category );
      
            if( category && category.subcategories ) {
              var subcat = category.subcategories.find( cat => cat.title === match.params.subCat );
            }
          }

          if (!(subcat && subcat.tiles)) {
            return (
              <section>
                <h2>Videos not found!</h2>
              </section>
            )
          }
          
        return (
            <div>
                <h4 className="p-3">{match.params.category}</h4>
                <VideoList videos={subcat.tiles} /> 
            </div>
        )  
}

export default VideoListFrame;
