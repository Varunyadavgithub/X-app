import React from "react";
import Createpost from "./Createpost";
import Tweet from "./Tweet";

const Feeds = () => {
  return (
    <>
      <div className="w-[60%] border-l border-r border-gray-700 mx-4">
        <Createpost />
        <Tweet />
        <Tweet />
        <Tweet />
      </div>
    </>
  );
};

export default Feeds;
