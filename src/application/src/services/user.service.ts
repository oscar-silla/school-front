import { User } from "../domain";
import { LoginRepositoryPort } from "../ports/out";
import { LoginRepositoryAdapter } from "../../../infrastructure/repository/adapters";
import { TokenType } from "../../../infrastructure/repository/types";
import UserServicePort from "../ports/in/services/user.service.port";

class UserService implements UserServicePort {
  private loginRepository: LoginRepositoryPort = new LoginRepositoryAdapter();

  constructor(loginRepository: LoginRepositoryPort) {
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
