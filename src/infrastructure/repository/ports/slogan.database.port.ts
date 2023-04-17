import { SloganModel } from "../models";

interface SloganDatabasePort {
  findFirst(): Promise<SloganModel | null>;
}

export default SloganDatabasePort;
