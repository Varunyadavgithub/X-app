import React from "react";
import { IoIosSearch } from "react-icons/io";
import Avatar from "react-avatar";

const Right = () => {
  return (
    <>
      <div className="w-[20%]">
        <div className="flex items-center p-2 bg-gray-200 rounded-full w-full">
          <IoIosSearch size={"24px"} />
          <input
            type="text"
            className="bg-transparent px-3 outline-none"
            placeholder="Search"
          />
        </div>

        <div className="my-4 p-4 bg-gray-100 rounded-2xl">
          <div className="text-lg font-bold">
            <h1>Subscribe to Premium</h1>
          </div>
          <div className="text-sm w-full">
            <p>
              Subscribe to unlock new features and if eligible, receive a share
              of ads revenue.
            </p>
          </div>
          <button className="my-2 px-4 py-2 border-none text-md bg-[#1098F0] text-white font-semibold rounded-full hover:bg-[#106df0e3]">
            Subscribe
          </button>
        </div>

        <div className="my-4 p-4 bg-gray-100 rounded-2xl">
          <h1 className="text-lg font-bold mb-2">Who to follow</h1>

          <div className="flex items-center justify-between my-4">
            <div className="flex">
              <div>
                <Avatar githubHandle="sitebase" size="40" round={true} />
              </div>
              <div className="ml-2">
                <h1 className="font-bold">Alex Xu</h1>
                <p className="text-sm">@Alexxu</p>
              </div>
            </div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="flex">
              <div>
                <Avatar githubHandle="sitebase" size="40" round={true} />
              </div>
              <div className="ml-2">
                <h1 className="font-bold">Alex Xu</h1>
                <p className="text-sm">@Alexxu</p>
              </div>
            </div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Follow
            </button>
          </div>

          <div className="flex items-center justify-between my-4">
            <div className="flex">
              <div>
                <Avatar githubHandle="sitebase" size="40" round={true} />
              </div>
              <div className="ml-2">
                <h1 className="font-bold">Alex Xu</h1>
                <p className="text-sm">@Alexxu</p>
              </div>
            </div>
            <button className="px-4 py-1 bg-black text-white rounded-full">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Right;
