import { SloganDatabasePort } from "../ports";
import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../../../application/src/constants";
import { HttpStatus } from "../../http-status";
import { SloganModel } from "../models";
import { SloganModelMapper } from "../mappers";

class SloganDatabase implements SloganDatabasePort {
  private sloganModelMapper: SloganModelMapper = new SloganModelMapper();

  async findFirst(): Promise<SloganModel | null> {
    return axios
      .get(`${BASE_URL}/slogans`)
      .then((res: AxiosResponse<any, any>): SloganModel | null => {
        return res.status === HttpStatus.OK
          ? this.sloganModelMapper.toSloganModel(res.data)
          : null;
      })
      .catch((): null => null);
  }
}

export default SloganDatabase;
