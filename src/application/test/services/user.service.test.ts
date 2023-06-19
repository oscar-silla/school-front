import { LoginRepositoryPort } from "../../src/ports/out";
import { User } from "../../src/domain";
import { TokenType } from "../../../infrastructure/repository/types";
import { UserServicePort } from "../../src/ports/in/services";
import { UserService } from "../../src/services";
import { TOKEN } from "../../src/constants";

const mockToken: string = "112421356645265356AJ";
const mockLoginRepository: LoginRepositoryPort = {
  login: jest.fn(),
};
const userService: UserServicePort = new UserService(mockLoginRepository);
const token: TokenType = {
  token: mockToken,
};
const user: User = new User();

describe("user service tests", (): void => {
  it("should return true when login", async (): Promise<void> => {
    jest.spyOn(mockLoginRepository, "login").mockResolvedValue(token);
    const res: boolean = await userService.login(user);
    expect(localStorage.getItem(TOKEN)).toBe(mockToken);
    expect(res).toBe(true);
    localStorage.removeItem(TOKEN);
  });
  it("should return false when login", async (): Promise<void> => {
    jest.spyOn(mockLoginRepository, "login").mockResolvedValue(false);
    const res: boolean = await userService.login(user);
    expect(res).toBe(false);
  });
});
