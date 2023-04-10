import { LastNew } from "../../domain";

interface LastNewRepositoryPort {
  findAll(page?: number, limit?: number): Promise<LastNew[] | []>;
}

export default LastNewRepositoryPort;
