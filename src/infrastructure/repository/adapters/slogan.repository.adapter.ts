import { SloganRepositoryPort } from "../../../application/src/ports/out";
import { Slogan } from "../../../application/src/domain";
import { SloganDatabasePort } from "../ports";
import { SloganDatabase } from "../database";
import { SloganModel } from "../models";
import { SloganModelMapper } from "../mappers";

class SloganRepositoryAdapter implements SloganRepositoryPort {
  private sloganDatabase: SloganDatabasePort = new SloganDatabase();
  private sloganModelMapper = new SloganModelMapper();

  async findFirst(): Promise<Slogan | null> {
    const response: SloganModel | null = await this.sloganDatabase.findFirst();
    return this.sloganModelMapper.toSlogan(response);
  }
}

export default SloganRepositoryAdapter;
