import { LoginCredentialsType, TokenType } from "../types";

interface LoginDatabasePort {
  login(loginCredentials: LoginCredentialsType): Promise<boolean | TokenType>;
}

export default LoginDatabasePort;
