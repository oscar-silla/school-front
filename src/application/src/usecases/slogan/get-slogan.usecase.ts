import { Slogan } from "../../domain";
import { GetSloganUseCasePort } from "../../ports/in/usecases/slogan";
import { SloganServicePort } from "../../ports/in/services";
import { SloganService } from "../../services";

class GetSloganUseCase implements GetSloganUseCasePort {
  private sloganService: SloganServicePort = new SloganService();

  async execute(): Promise<Slogan | null> {
    return await this.sloganService.getSlogan();
  }
}

export default GetSloganUseCase;
