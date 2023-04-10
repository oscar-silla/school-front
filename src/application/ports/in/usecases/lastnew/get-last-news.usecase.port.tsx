import { LastNew } from "../../../../domain";

interface GetLastNewsUseCasePort {
  execute(page?: number, limit?: number): Promise<LastNew[] | []>;
}

export default GetLastNewsUseCasePort;
