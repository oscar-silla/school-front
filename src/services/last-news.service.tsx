import axios from "axios";
import { BaseUrl } from "../constants";
import { LastNewType } from "../types";

const lastNewsService = {
  getAllLastNews: async (): Promise<LastNewType[] | []> => {
    return await axios
      .get(`${BaseUrl}/lastNews`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default lastNewsService;
