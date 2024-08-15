import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';
import MainSideBar from './MainSideBar';
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen)


    return !isMenuOpen ? <MainSideBar /> : (
        <div className='p-5 m-5  w-56'>
            <ul >
                <Link to="/">   <li className='flex pt-2 gap-2' ><IoMdHome /><span >Home</span></li></Link>
                <li className='flex pt-2 gap-2'><SiYoutubeshorts />Shorts</li>
                <li className='flex pt-2 gap-2'><MdOutlineSubscriptions />Subscription</li>

            </ul>
            <br />
            <hr />

            <h1 className='font-bold pt-5'>Subscription</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movis</li>
            </ul>
            <br />
            <hr />


            <h1 className='font-bold pt-5' >Watch later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movis</li>
            </ul>
        </div>
    )
}

export default SideBar
