import React from "react";
import { Navbar, Video } from "../components";
import { VideoHoc } from "../hocs";

const Home = () => {
  const {} = VideoHoc;

  return (
    <>
      <Navbar />
      <Video />
    </>
  );
};

export default Home;
