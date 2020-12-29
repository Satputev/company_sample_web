import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
  return (
    <>
      <Common
        name="Grow your business with"
        imgsrc="https://cdn.pixabay.com/photo/2016/07/23/10/40/binary-1536623_1280.jpg"
        visit="/service"
        btname="Get Started"
      />
    </>
  );
};

export default Home;
