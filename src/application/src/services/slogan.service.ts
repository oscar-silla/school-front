import { Slogan } from "../domain";
import { SloganServicePort } from "../ports/in/services";
import { SloganRepositoryPort } from "../ports/out";
import { SloganRepositoryAdapter } from "../../../infrastructure/repository/adapters";

class SloganService implements SloganServicePort {
  private sloganRepository: SloganRepositoryPort =
    new SloganRepositoryAdapter();

  async getSlogan(): Promise<Slogan | null> {
    return await this.sloganRepository.findFirst();
  }
}

export default SloganService;
