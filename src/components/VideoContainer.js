import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constent';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
    const [Videos, setVideo] = useState([])
    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API);
        const json = await data.json();
        console.log(json.items);
        setVideo(json.items)

    }
    return (
        <div className='flex flex-wrap'>
            {Videos.map((video) => (
                <Link to={"/watch?v=" + video.id}>  <VideoCard key={video.id} info={video} /></Link>
            ))}

        </div>
    )
}

export default VideoContainer
