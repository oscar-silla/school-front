import { UserServicePort } from "../../../src/ports/in/services";
import { LoginUseCase } from "../../../src/usecases/user";
import { LoginUseCasePort } from "../../../src/ports/in/usecases/user";
import { User } from "../../../src/domain";

const mockLoginService: UserServicePort = {
  login: jest.fn(),
};
const loginUseCase: LoginUseCasePort = new LoginUseCase(mockLoginService);
const user: User = new User(
  "username",
  "password",
  "name",
  "example@email.com",
  "surnames",
  "avatar"
);
const emptyUser: User = new User();

describe("login usecase tests", (): void => {
  it("should return true when execute", async (): Promise<void> => {
    jest.spyOn(mockLoginService, "login").mockResolvedValue(true);
    const res: boolean = await loginUseCase.execute(user);
    expect(mockLoginService.login).toHaveBeenCalledWith(user);
    expect(res).toBe(true);
  });

  it("should return false when execute", async (): Promise<void> => {
    const res: boolean = await loginUseCase.execute(emptyUser);
    expect(res).toBe(false);
  });
});
