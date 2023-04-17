import { SloganDatabasePort } from "../ports";
import axios, { AxiosResponse } from "axios";
import { BaseUrl } from "../../../application/src/constants";
import { HttpStatus } from "../../http-status";
import { SloganModel } from "../models";

class SloganDatabase implements SloganDatabasePort {
  async findFirst(): Promise<SloganModel | null> {
    return axios
      .get(`${BaseUrl}/slogans`)
      .then((res: AxiosResponse<any, any>) => {
        return res.status === HttpStatus.OK ? res.data : null;
      })
      .catch((): null => null);
  }
}

export default SloganDatabase;
