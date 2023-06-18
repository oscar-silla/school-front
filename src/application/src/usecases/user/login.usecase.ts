import { LoginUseCasePort } from "../../ports/in/usecases/user";
import { User } from "../../domain";
import { LoginServicePort } from "../../ports/in/services";
import UserService from "../../services/user.service";

class LoginUseCase implements LoginUseCasePort {
  private loginService: LoginServicePort = new UserService();

  async execute(user: User): Promise<boolean> {
    if (user.checkLoginCredentials()) {
      return await this.loginService.login(user);
    } else {
      return false;
    }
  }
}

export default LoginUseCase;
