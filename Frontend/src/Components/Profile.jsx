import React from "react";
import Avatar from "react-avatar";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import banner from "../assets/banner.jpg";
import profile from "../assets/Profile.jpeg";

const Profile = () => {
  return (
    <>
      <div className="w-[50%] border-l border-r border-gray-400">
        <div>
          <div className="flex items-center px-4 py-2">
            <Link
              to="/"
              className="p-2 rounded-full hover:bg-gray-200 hover:cursor-pointer"
            >
              <IoMdArrowBack size={"24px"} />
            </Link>
            <div className="ml-2">
              <h1 className="font-bold text-lg">Varun Yadav</h1>
              <p className="text-gray-500 text-sm">97 posts</p>
            </div>
          </div>
          <img src={banner} alt="banner" />
          <div className="absolute top-48 ml-2 border-4 border-white rounded-full">
            <Avatar src={profile} size="120" round={true} />
          </div>
          <div className="text-right m-2">
            <button className="px-4 py-1 hover:bg-gray-200 rounded-full border border-gray-800">
              Edit Profile
            </button>
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-bold">Varun Yadav</h1>
            <p className="text-sm">@varun_yadav01</p>
          </div>
          <div className="m-4">
            <p>
              📚 CSE'25 @ParulUniversity | 🧑‍💻 Passionate about Coding and MERN
              stack developement.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
