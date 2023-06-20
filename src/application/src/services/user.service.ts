import { User } from "../domain";
import { UserRepositoryPort } from "../ports/out";
import { TokenType } from "../../../infrastructure/repository/types";
import UserServicePort from "../ports/in/services/user.service.port";

class UserService implements UserServicePort {
  private loginRepository: UserRepositoryPort;

  constructor(loginRepository: UserRepositoryPort) {
    this.loginRepository = loginRepository;
  }

  async login(user: User): Promise<boolean> {
    const result: boolean | TokenType = await this.loginRepository.login(user);
    if (result && typeof result !== "boolean") {
      user.registerTokenInLocalStorage(result.token);
      return true;
    } else {
      return false;
    }
  }
}

export default UserService;
