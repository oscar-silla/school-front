import axios from "axios";
import { BaseUrl } from "../constants";
import { NewType } from "../types";

const newsService = {
  getAllStories: async (): Promise<NewType[] | []> => {
    return await axios
      .get(`${BaseUrl}/stories`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default newsService;
