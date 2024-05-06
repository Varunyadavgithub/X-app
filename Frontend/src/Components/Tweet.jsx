import React from "react";
import Avatar from "react-avatar";
import profile from "../assets/Profile.jpeg";
import { FaRegComment } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiBarChartGroupedLine } from "react-icons/ri";
import { CiBookmark } from "react-icons/ci";
import { RiShare2Line } from "react-icons/ri";

const Tweet = () => {
  return (
    <>
      <div className="border-b border-gray-300">
        <div className="flex items-center gap-2 p-4">
          <Avatar src={profile} size="40" round={true} />
          <div className="w-full">
            <div className="flex items-center gap-1 cursor-pointer">
              <h1 cursor-pointer className="font-semibold">
                Varun Yadav
              </h1>
              <p className="text-gray-500 text-sm">
                @varun_yadav01 cursor-pointer . 5h
              </p>
            </div>

            <div>
              <p>Hello I'm Varun Yadav a MERN Stack Developer from India.</p>
            </div>

            <div className="flex items-center justify-between my-3">
              <div className="flex items-center gap-1 cursor-pointer p-2 hover:bg-blue-300 rounded-full">
                <FaRegComment size={"20px"} />
                <p>72</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer p-2 hover:bg-green-200 rounded-full">
                <FaRetweet size={"20px"} />
                <p>1.5k</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer p-2 hover:bg-pink-300 rounded-full">
                <CiHeart size={"20px"} />
                <p>2.9k</p>
              </div>
              <div className="flex items-center gap-1 cursor-pointer p-2 hover:bg-blue-300 rounded-full">
                <RiBarChartGroupedLine size={"20px"} />
                <p>50.5k</p>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="p-2 hover:bg-blue-300 rounded-full">
                  <CiBookmark size={"20px"} />
                </div>
                <div className="p-2 hover:bg-blue-300 rounded-full">
                  <RiShare2Line size={"20px"} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tweet;
