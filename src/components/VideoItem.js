import React from 'react'
import './VideoItem.css'




const VidoeItem = ({ video , onVideoSelect }) => {
    const videoComponent = (video) => {
        onVideoSelect(video)
     }
    return (
    <div className ="video-item item" onClick = { () => videoComponent(video) }> 
        <img  className="ui image" src = { video.snippet.thumbnails.medium.url }/>
        <div className ="content">
            <div className= "header"> { video.snippet.title } </div>
        </div>
    </div>
    )
}

export default VidoeItem