import { LoginCredentialsType } from "../types";

class LoginModel {
  private email: string;
  private password: string;

  constructor(email?: string, password?: string) {
    this.email = email ?? "";
    this.password = password ?? "";
  }

  public getUsername(): string {
    return this.email;
  }

  public getPassword(): string {
    return this.password;
  }

  public setEmail(email: string): void {
    this.email = email;
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
