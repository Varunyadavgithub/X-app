import React from "react";
import Left from "./Left";
import Right from "./Right";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="flex justify-between w-[80%] mx-auto my-2">
        <Left />
        <Outlet />
        <Right />
      </div>
    </>
  );
};

export default Home;
