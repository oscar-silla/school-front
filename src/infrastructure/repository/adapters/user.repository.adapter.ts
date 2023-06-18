import { LoginRepositoryPort } from "../../../application/src/ports/out";
import { User } from "../../../application/src/domain";
import { LoginDatabasePort } from "../ports";
import { LoginDatabase } from "../database";
import LoginModelMapper from "../mappers/login.model.mapper";
import { LoginModel } from "../models";
import { TokenType } from "../types";

class UserRepositoryAdapter implements LoginRepositoryPort {
  private loginDatabase: LoginDatabasePort = new LoginDatabase();
  private loginModelMapper: LoginModelMapper = new LoginModelMapper();

  async login(user: User): Promise<boolean | TokenType> {
    const loginModel: LoginModel = this.loginModelMapper.toLoginModel(user);
    return await this.loginDatabase.login(loginModel.toJsonObject());
  }
}

export default UserRepositoryAdapter;
