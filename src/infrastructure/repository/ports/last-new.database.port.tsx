import { LastNewModel } from "../models";

interface LastNewsDatabasePort {
  findAll(page?: number, limit?: number): Promise<LastNewModel[] | []>;
}

export default LastNewsDatabasePort;
