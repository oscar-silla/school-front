import { LoginCredentialsType } from "../types";

class LoginModel {
  private email: string;
  private password: string;

  constructor(username?: string, password?: string) {
    this.email = username ?? "";
    this.password = password ?? "";
  }

  public getUsername(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setUsername(username: string): void {
    this.email = username;
  }

  public setPassword(password: string): void {
    this.password = password;
  }

  public toJsonObject(): LoginCredentialsType {
    return {
      email: this.email,
      password: this.password,
    };
  }
}

export default LoginModel;
