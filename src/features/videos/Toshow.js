import React, { useState, useEffect} from 'react'
import VideoList from './VideoList';
import { useSelector, useDispatch } from 'react-redux';
import { getVideosInSubCat, getVideos } from './videoSlice';

const Toshow = ({match}) => {

      const allVideos = useSelector(getVideos); 
        
          if( allVideos && allVideos.categories ) {
             const category = allVideos.categories.find( cat => cat.title === match.params.category );
             console.log(allVideos.categories.map(cat => cat.title === match.params.category));
             console.log(category);

             if( category && category.subcategories ) {
                var subcat = category.subcategories.find( cat => cat.title === match.params.subCat );
                console.log(subcat);
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

export default Toshow
