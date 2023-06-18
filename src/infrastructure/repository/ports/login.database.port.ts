import { LoginCredentialsType } from "../types";

interface LoginDatabasePort {
  login(loginCredentials: LoginCredentialsType): Promise<boolean>;
}

export default LoginDatabasePort;
