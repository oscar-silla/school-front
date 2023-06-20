import { LoginModel } from "../models";
import { User } from "../../../application/src/domain";

class LoginModelMapper {
  public toLoginModel(user: User): LoginModel {
    const loginModel: LoginModel = new LoginModel();
    loginModel.setEmail(user.getUsername());
    loginModel.setPassword(user.getPassword());
    return loginModel;
  }
}

export default LoginModelMapper;
