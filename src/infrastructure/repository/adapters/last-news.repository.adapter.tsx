import axios from "axios";
import { BaseUrl } from "../../../application/constants";
import { LastNewType } from "../types";

const lastNewsRepositoryAdapter = {
  getAllLastNews: async (): Promise<LastNewType[] | []> => {
    return await axios
      .get(`${BaseUrl}/lastNews`)
      .then((res) => res?.data)
      .catch(() => []);
  },
};

export default lastNewsRepositoryAdapter;
