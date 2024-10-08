import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appslice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v"));


    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())

    }, [])





    return (
        <div className='px-5 mx-4 my-4'>
            <iframe width="900"

                height="500"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen

            ></iframe>

        </div>
    )
}

export default WatchPage
