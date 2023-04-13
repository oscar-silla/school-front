import axios from "axios";
import { LastNewsDatabasePort } from "../ports";
import { BaseUrl } from "../../../application/src/constants";
import { HttpStatus } from "../../http-status";
import { LastNewModelMapper } from "../mappers";
import { LastNewModel } from "../models";

class LastNewsDatabase implements LastNewsDatabasePort {
  private lastNewModelMapper = new LastNewModelMapper();

  async findAll(
    page: number = 0,
    limit: number = 3
  ): Promise<LastNewModel[] | []> {
    return await axios
      .get(`${BaseUrl}/lastNews?page=${page}&limit=${limit}`)
      .then((res) => {
        if (res.status === HttpStatus.OK) {
          return this.lastNewModelMapper.toLastNewModels(res.data);
        } else {
          return [];
        }
      })
      .catch(() => []);
  }
}

export default LastNewsDatabase;
