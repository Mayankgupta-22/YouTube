import React from 'react'
import { IoMdHome } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
const MainSideBar = () => {
    return (
        <div className=' px-1'>
            <ul className='flex flex-col items-center my-5 p-1 ' >
                <li className='cursor-pointer' ><IoMdHome className="size-8" /><span className="text-sm">Home</span></li>
                <br />
                <br />

                <li className='cursor-pointer'><SiYoutubeshorts className="size-8" /><span className='text-sm'>Shorts</span></li>
                <br />



                <br />

                <li className='flex flex-col items-center cursor-pointer'><MdOutlineSubscriptions className="size-8 text-center" /><spane className="tetx-sm">Subscription</spane></li>

            </ul>
        </div>
    )
}

export default MainSideBar
