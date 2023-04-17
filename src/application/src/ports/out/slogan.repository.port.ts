import { Slogan } from "../../domain";

interface SloganRepositoryPort {
  findFirst(): Promise<Slogan | null>;
}

export default SloganRepositoryPort;
