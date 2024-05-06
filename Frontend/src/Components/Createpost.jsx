import React from "react";
import Avatar from "react-avatar";
import profile from "../assets/Profile.jpeg";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineGifBox } from "react-icons/md";
import { MdOutlinePoll } from "react-icons/md";
import { BsEmojiSmile } from "react-icons/bs";
import { LuCalendarClock } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import { BsGlobeCentralSouthAsia } from "react-icons/bs";

const Createpost = () => {
  return (
    <>
      <div className="w-[100%]">
        <div>
          <div className="flex items-center justify-evenly border-b border-gray-400">
            <div className="cursor-pointer hover:bg-gray-300 w-full text-center px-4 py-3">
              <h1 className="text-lg font-semibold text-gray-600">For you</h1>
            </div>
            <div className="cursor-pointer hover:bg-gray-300 w-full text-center px-4 py-3">
              <h1 className="text-lg font-semibold text-gray-600">Following</h1>
            </div>
          </div>

          <div>
            <div className="flex items-center p-4">
              <div>
                <Avatar src={profile} size="40" round={true} />
              </div>
              <input
                className="w-full outline-none border-none text-lg ml-2"
                type="text"
                placeholder="What is happening?!"
              />
            </div>

            <div className="flex items-center">
              <div className="flex items-center justify-start ml-12 px-2 py-1 hover:bg-gray-300 rounded-full cursor-pointer">
                <BsGlobeCentralSouthAsia size={"20px"} color="#1098F0" />
                <h1 className="ml-2 font-semibold text-[#1098F0]">
                  Everyone can reply
                </h1>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 border-b border-gray-400">
              <div className="flex ml-10">
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <CiImageOn size={"20px"} color="#1098F0" />
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <MdOutlineGifBox size={"20px"} color="#1098F0" />
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <MdOutlinePoll size={"20px"} color="#1098F0" />
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <BsEmojiSmile size={"20px"} color="#1098F0" />
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <LuCalendarClock size={"20px"} color="#1098F0" />
                </div>
                <div className="p-2 cursor-pointer hover:bg-gray-200 rounded-full">
                  <CiLocationOn size={"20px"} color="#1098F0" />
                </div>
              </div>
              <button className="my-2 px-4 py-2 border-none text-md bg-[#1098F0] text-white font-semibold rounded-full hover:bg-[#106df0e3]">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Createpost;
