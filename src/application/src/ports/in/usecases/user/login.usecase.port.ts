import { User } from "../../../../domain";

interface LoginUseCasePort {
  execute(user: User): Promise<boolean>;
}

export default LoginUseCasePort;
