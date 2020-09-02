import React from 'react'
import './VideoDetail.css';

const VideoDetail = () => {
    const video={
        "webSearchUrl": "https://www.bing.com/videos/search?q=Spiderman&view=detail&mid=5FB2BA7F4FA8F41BCE195FB2BA7F4FA8F41BCE19",
        name: "Ron Suno - Spider-Man (Feat. Fivio Foreign) [Official Video]",
        description: "Ron Suno Drops New Single \"Spider-Man\" alongside Fivio Foreign. Stream & Download \"SWAG LIKE MIKE\" on all platforms: https://unitedmasters.com/m/swaglikemike Directed by Now & Forever Productions @shotbynaf Subscribe to Ron Suno's Channel: http://bit.ly/Subscribe-RonSuno Follow Ron Suno: https://www.instagram.com/ronsuno/ https://twitter.com ...",
        thumbnailUrl: "https://tse3.mm.bing.net/th?id=OVP.xO1i9f_Q1MkpqGoru8LGnAHfFn&pid=Api",
        datePublished: "2020-02-07T20:15:58.0000000",
        "publisher": [
            {
                "name": "YouTube"
            }
        ],
        creator: {
            name: "Ron Suno"
        },
        "isAccessibleForFree": true,
        "isFamilyFriendly": true,
        "contentUrl": "https://www.youtube.com/watch?v=J36B9zyBPGc",
        "hostPageUrl": "https://www.youtube.com/watch?v=J36B9zyBPGc",
        "encodingFormat": "h264",
        hostPageDisplayUrl: "https://www.youtube.com/watch?v=J36B9zyBPGc",
        "width": 1280,
        "height": 720,
        "duration": "PT4M56S",
        "motionThumbnailUrl": "https://tse3.mm.bing.net/th?id=OM.Gc4b9KhPf7qyXw_1593406889&pid=Api",
        "embedHtml": "<iframe width=\"1280\" height=\"720\" src=\"https://www.youtube.com/embed/J36B9zyBPGc?autoplay=1\" frameborder=\"0\" allowfullscreen></iframe>",
        "allowHttpsEmbed": true,
        viewCount: 5079070,
        "thumbnail": {
            "width": 479,
            "height": 359
        },
        "videoId": "5FB2BA7F4FA8F41BCE195FB2BA7F4FA8F41BCE19",
        "allowMobileEmbed": true,
        "isSuperfresh": false
    }
    const iframeUrl = (raw) => {
        const newUrl = raw.replace("watch?v=", "embed/");
        return (newUrl+"?autoplay=1");
    }

    return (
        <div className="VideoDetail mx-2">
            <div className="iframe-container d-flex flex-column justify-content-center w-100">
                <iframe src={iframeUrl(video.hostPageDisplayUrl)} frameborder="0" allowfullscreen></iframe>
            </div>
            <div className="card mb-5 mt-1 w-100 p-5">
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <img className="img" width="100%" src={video.thumbnailUrl}></img>

                    </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{video.name}</h5>
                        <p className="card-text">{video.description}</p>
                        <p className="card-text"><small className="text-muted">Creator : {video.creator.name}</small></p>
                        <p className="card-text"><small className="text-muted">Release : {video.datePublished.substring(0,10)}</small></p>
                        <p className="card-text"><small className="text-muted">Viewer : {video.viewCount}</small></p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
    
}

export default VideoDetail;
