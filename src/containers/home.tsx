import React from "react";
import { Navbar, Video } from "../components";
import { useVideo } from "../hooks";

const Home = () => {
  const { video } = useVideo();

  return (
    <>
      <Navbar />
      <Video video={video} />
    </>
  );
};

export default Home;
