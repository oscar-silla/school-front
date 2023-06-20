import { LoginDatabasePort } from "../../repository/ports";
import { UserRepositoryPort } from "../../../application/src/ports/out";
import { UserRepositoryAdapter } from "../../repository/adapters";
import { User } from "../../../application/src/domain";
import { LoginCredentialsType, TokenType } from "../../repository/types";
import { LoginModel } from "../../repository/models";
import { MOCK_EMAIL, MOCK_PASSWORD } from "../../../application/src/constants";

const mockLoginDatabase: LoginDatabasePort = {
  login: jest.fn(),
};
const mockLoginModelMapper = {
  toLoginModel: jest.fn(),
};
const userRepositoryAdapter: UserRepositoryPort = new UserRepositoryAdapter(
  mockLoginDatabase,
  mockLoginModelMapper
);
const mockLoginCredentials: LoginCredentialsType = {
  email: MOCK_EMAIL,
  password: MOCK_PASSWORD,
};
const mockUser: User = new User();
mockUser.setLoginCredentials(mockLoginCredentials);
const mockLoginModel: LoginModel = new LoginModel(MOCK_EMAIL, MOCK_PASSWORD);

describe("user repository adapter tests", (): void => {
  it("should return true when login", async (): Promise<void> => {
    jest
      .spyOn(mockLoginModelMapper, "toLoginModel")
      .mockReturnValue(mockLoginModel);
    jest.spyOn(mockLoginDatabase, "login").mockResolvedValue(true);
    const res: TokenType | boolean = await userRepositoryAdapter.login(
      mockUser
    );
    expect(res).toBe(true);
  });
});
