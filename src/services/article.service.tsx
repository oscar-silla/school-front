import axios from "axios";
import { BaseUrl } from "../constants";
import { NewType } from "../types";

const articlesService = {
  getAllArticles: async (): Promise<NewType[] | []> => {
    return await axios
      .get(`${BaseUrl}/articles`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default articlesService;
