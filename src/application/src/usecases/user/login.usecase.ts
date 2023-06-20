import { LoginUseCasePort } from "../../ports/in/usecases/user";
import { User } from "../../domain";
import { UserServicePort } from "../../ports/in/services";

class LoginUseCase implements LoginUseCasePort {
  private loginService: UserServicePort;

  constructor(loginService: UserServicePort) {
    this.loginService = loginService;
  }

  async execute(user: User): Promise<boolean> {
    if (user.checkLoginCredentials()) {
      return await this.loginService.login(user);
    } else {
      return false;
    }
  }
}

export default LoginUseCase;
