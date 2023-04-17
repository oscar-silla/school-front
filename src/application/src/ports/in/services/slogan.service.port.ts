import { Slogan } from "../../../domain";

interface SloganServicePort {
  getSlogan(): Promise<Slogan | null>;
}

export default SloganServicePort;
