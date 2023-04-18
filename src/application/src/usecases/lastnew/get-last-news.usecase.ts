import { LastNew } from "../../domain";
import { LastNewService } from "../../services";
import { LastNewServicePort } from "../../ports/in/services";
import { GetLastNewsUseCasePort } from "../../ports/in/usecases/lastnew";

class GetLastNewsUseCase implements GetLastNewsUseCasePort {
  private lastNewService: LastNewServicePort = new LastNewService();

  async execute(page?: number, limit?: number): Promise<LastNew[] | []> {
    return await this.lastNewService.getLastNews(page, limit);
  }
}

export default GetLastNewsUseCase;
