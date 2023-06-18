import { TOKEN } from "../constants";

class Token {
  private readonly token: string;

  constructor(token: string) {
    this.token = token;
  }

  public saveInLocalStorage(): void {
    if (this.token) {
      localStorage.setItem(TOKEN, this.token);
    }
  }
}

export default Token;
