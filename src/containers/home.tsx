import React, { ReactElement } from "react";
import { Navbar, Video, Story } from "../components";
import { useStory, useVideo } from "../hooks";
import { StoryType } from "../types";

const Home = () => {
  const { video } = useVideo();
  const { stories } = useStory();

  type propType = {
    storyList: StoryType[] | [];
  };

  const StoryList = (props: propType): JSX.Element => {
    const storyList = props?.storyList;
    if (storyList.length > 0) {
      return (
        <>
          {storyList.map((story) => (
            <Story />
          ))}
        </>
      );
    } else {
      return <p>nothig</p>;
    }
  };

  return (
    <>
      <Navbar />
      <Video video={video} />
      <StoryList storyList={stories} />
    </>
  );
};

export default Home;
