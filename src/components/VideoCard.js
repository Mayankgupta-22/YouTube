import React from 'react'

const VideoCard = ({ info }) => {
    console.log(info);

    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet

    return (
        <div className='p-2 m-4 w-80 mx-4'>
            <img className='rounded-xl w-96' alt="thumnails" src={thumbnails.medium.url} />
            <ul>
                <li className='font-bold py-1'>{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount} views</li>
            </ul>

        </div>
    )
}

export default VideoCard

