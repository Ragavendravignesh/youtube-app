import React, {useState,useEffect} from 'react'
import Youtube from '../api/youtube'


const KEY  = 'AIzaSyDWgweSNKZq-nURh7HQrWhYyBcELDoz6U8'

const useVideo = (defaultSearchTerm) => {
    
    const [videos, setVideos] = useState([])

    useEffect (()=>{
        search(defaultSearchTerm)
    },[])

    const search = async (term) => {
        const response = await Youtube.get('/search',
        {
            params: {
                q :term,
                part : "snippet",
                type : 'video' ,
                maxResult: 5,
                key : KEY
            }
        })
        setVideos(response.data.items)
    }

    return [videos, search];
} 

export default useVideo