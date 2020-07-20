import React , {useState ,useEffect} from 'react'
import SearchBar from './SearchBar'
import VideosList from './videosList'
import VideoDisplay from './VideoDisplay'
import useVideo from '../hooks/useVideo'

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null)
    const [videos,search] = useVideo('ennavale adi ennavale')

    useEffect (()=>{setSelectedVideo( videos[0] )},[videos])
        return (
            <div className = "ui container">
                <SearchBar onFormSubmit = { search } />
                <div className="ui grid">
                    <div className="row">
                        <div className="twelve wide column">
                            <VideoDisplay video = {selectedVideo}/>
                        </div>
                        <div className="four wide column">
                            <VideosList videos = { videos } onVideoSelect= {setSelectedVideo}/>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default App