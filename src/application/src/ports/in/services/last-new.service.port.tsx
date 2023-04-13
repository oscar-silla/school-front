import { LastNew } from "../../../domain";

interface LastNewServicePort {
  getLastNews(page?: number, limit?: number): Promise<LastNew[] | []>;
}

export default LastNewServicePort;
