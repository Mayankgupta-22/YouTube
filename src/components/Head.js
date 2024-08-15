import React from "react";
import { useDispatch } from "react-redux";
import { toggle } from "../utils/appslice";
import { RiVideoAddLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";

const Head = () => {

    const dispatch = useDispatch();

    const togglemenuhandler = () => {
        dispatch(toggle());

    }

    return (
        <div className='grid grid-flow-col   m-1 p-2 '>
            <div className='flex  m-4 col-span-1 '>
                <img
                    onClick={() => togglemenuhandler()}
                    className='h-6 cursor-pointer'
                    alt='menu' src='https://as2.ftcdn.net/v2/jpg/01/09/84/11/1000_F_109841191_B1qcKCxRwwt4DWIBpXD7bc4IPcozRBzT.jpg' />

                <a ><img className='h-6  mx-3'
                    alt='youtube-logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s' /> </a>
            </div>
            <div className="col-span-10 px-8 ">

                <input className="border  border-gray-400 w-1/2 ml-14 mt-1 p-2 rounded-l-2xl" type="text" />

                <button className="border border-gray-400 py-2 px-5 rounded-r-2xl bg-gray-100 " >🔍</button>
                <MdKeyboardVoice className=" absolute top-6 mx-[570px] size-7 cursor-pointer hover:bg-gray-200 rounded-xl" />

            </div>
            <div className="col-span-1 flex my-3">
                <RiVideoAddLine className="size-8 p-1 mr-3 cursor-pointer hover:bg-gray-100 rounded-xl" />
                <IoMdNotificationsOutline className="size-6 mt-1 mr-4 cursor-pointer hover:bg-gray-100 rounded-xl" />
                <img className="h-8 cursor-pointer"
                    alt='user' src='https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' />
            </div>
        </div>
    )
}

export default Head;