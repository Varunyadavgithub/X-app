import React from "react";
import logo from "../assets/X-logo.png";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiFileListLine } from "react-icons/ri";
import { PiBookmarkSimpleBold } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { CiCircleMore } from "react-icons/ci";
import { IoMdLogOut } from "react-icons/io";
import { Link } from "react-router-dom";

const Left = () => {
  return (
    <>
      <div className="w-[20%]">
        {/* logo */}
        <div>
          <img className="ml-9 hover:cursor-pointer" src={logo} width={"26px"} alt="twitter-logo"/>
        </div>

        {/* icons */}
        <div className="my-4">
          <Link to="/" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <GoHomeFill size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Home</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <IoIosSearch size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Explore</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <IoNotifications size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Notifications</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <MdOutlineEmail size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Messages</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <RiFileListLine size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Lists</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <PiBookmarkSimpleBold size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Bookmarks</h1>
          </div>
          
          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <IoPeopleOutline size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Communities</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <img src={logo} alt="logo" width={'24px'} />
            </div>
            <h1 className="text-xl font-semibold ml-2">Premium</h1>
          </div>

          <Link to="/profile" className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CgProfile size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Profile</h1>
          </Link>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <CiCircleMore size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">More</h1>
          </div>

          <div className="flex items-center my-2 px-4 py-2 hover:bg-gray-200 rounded-full cursor-pointer">
            <div>
              <IoMdLogOut size={'24px'}/>
            </div>
            <h1 className="text-xl font-semibold ml-2">Logout</h1>
          </div>
          <button className="my-2 px-4 py-2 border-none text-md bg-[#1098F0] text-white font-semibold rounded-full w-full hover:bg-[#106df0e3]">Post</button>
        </div>
      </div>
    </>
  );
};

export default Left;
