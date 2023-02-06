import { useEffect, useState } from "react";
import storyService from "../services/story.service";
import { StoryType } from "../types";

const { getAllStories } = storyService;

const useStory = () => {
  const [stories, setStories] = useState<StoryType[] | []>([]);

  useEffect(() => {
    (async () => {
      setStories(await getStories());
    })();
  }, []);

  const getStories = async (): Promise<StoryType[] | []> => {
    return await getAllStories();
  };

  return {
    stories,
  };
};

export default useStory;
