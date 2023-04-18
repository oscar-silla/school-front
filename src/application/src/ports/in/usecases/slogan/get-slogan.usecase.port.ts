import { Slogan } from "../../../../domain";

interface GetSloganUseCasePort {
  execute(): Promise<Slogan | null>;
}

export default GetSloganUseCasePort;
