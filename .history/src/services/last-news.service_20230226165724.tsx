import axios from "axios";
import { BaseUrl } from "../constants";
import { NewType } from "../types";

const lastNewsService = {
  getLastNews: async (): Promise<NewType[] | []> => {
    return await axios
      .get(`${BaseUrl}/lastNews`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default lastNewsService;
