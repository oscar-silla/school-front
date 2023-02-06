import axios from "axios";
import { BaseUrl } from "../constants";
import { StoryType } from "../types";

const storyService = {
  getAllStories: async (): Promise<StoryType[] | []> => {
    return await axios
      .get(`${BaseUrl}/stories`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default storyService;
