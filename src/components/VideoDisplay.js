import React from 'react'

const VideoDisplay = ({ video }) => {
    console.log(video)
    if(!video ){
         return <div>Loading...</div>
    }
    return (
        <div>
            <div className="ui embed">
                <iframe src = {`https://www.youtube.com/embed/${video.id.videoId}`} /> 
            </div>
            <div className = "ui segment"> 
                <h5 className="ui header">{video.snippet.title} </h5>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );

}

export default VideoDisplay 