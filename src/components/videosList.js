import React from 'react' 
import VideoItem from './VideoItem'

const imageList = ({ videos , onVideoSelect }) => {
    return (
        <div className = "ui relaxed divided list">  
            {videos.map( (video, i )=> { 
                return (
                    <div>
                        <VideoItem key={video.id.videoId} video = {video} onVideoSelect = {onVideoSelect}/>
                    </div>
                );
            })}
        </div>
    );
}

export default imageList