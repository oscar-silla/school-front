import LastNewRepositoryPort from "../../../application/ports/out/last-new.repository.port";
import { LastNew } from "../../../application/domain";
import { LastNewsDatabasePort } from "../ports";
import { LastNewsDatabase } from "../database";
import { LastNewModel } from "../models";
import { LastNewModelMapper } from "../mappers";

class LastNewRepositoryAdapter implements LastNewRepositoryPort {
  private lastNewsDatabase: LastNewsDatabasePort = new LastNewsDatabase();
  private lastNewModelMapper = new LastNewModelMapper();

  async findAll(page?: number, limit?: number): Promise<LastNew[] | []> {
    const response: LastNewModel[] | [] = await this.lastNewsDatabase.findAll(
      page,
      limit
    );
    return this.lastNewModelMapper.toLastNews(response);
  }
}

export default LastNewRepositoryAdapter;
