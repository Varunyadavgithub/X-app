import React from "react";
import Left from "./Left";
import Feeds from "./Feeds";
import Right from "./Right";

const Home = () => {
  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto my-2">
        <Left />
        <Feeds />
        <Right />
      </div>
    </>
  );
};

export default Home;
