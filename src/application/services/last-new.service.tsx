import { LastNew } from "../domain";
import { LastNewServicePort } from "../ports/in/services";
import LastNewRepositoryPort from "../ports/out/last-new.repository.port";
import LastNewRepositoryAdapter from "../../infrastructure/repository/adapters/last-new.repository.adapter";

class LastNewService implements LastNewServicePort {
  private lastNewRepository: LastNewRepositoryPort =
    new LastNewRepositoryAdapter();

  async getLastNews(page?: number, limit?: number): Promise<LastNew[] | []> {
    return await this.lastNewRepository.findAll(page, limit);
  }
}

export default LastNewService;
