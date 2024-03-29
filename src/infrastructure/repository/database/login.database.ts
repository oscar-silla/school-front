import { LoginDatabasePort } from "../ports";
import LoginCredentialsType from "../types/login-credentials.type";
import axios from "axios";
import { BASE_URL } from "../../../application/src/constants";
import { HttpStatus } from "../../http-status";
import { TokenType } from "../types";

class LoginDatabase implements LoginDatabasePort {
  async login(
    loginCredentials: LoginCredentialsType
  ): Promise<boolean | TokenType> {
    return await axios
      .post(`${BASE_URL}/login`, loginCredentials)
      .then((res) => {
        if (res.status === HttpStatus.OK) {
          return res.data;
        }
      })
      .catch((): boolean => false);
  }
}

export default LoginDatabase;
