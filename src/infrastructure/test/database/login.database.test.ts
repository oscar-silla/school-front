import { LoginDatabasePort } from "../../repository/ports";
import axios from "axios";
import { LoginDatabase } from "../../repository/database";
import { LoginCredentialsType, TokenType } from "../../repository/types";
import {
  MOCK_EMAIL,
  MOCK_PASSWORD,
  MOCK_TOKEN,
} from "../../../application/src/constants";
import { HttpStatus } from "../../http-status";

type responseType = {
  data: { token: string } | boolean;
  status: HttpStatus;
};

const loginDatabase: LoginDatabasePort = new LoginDatabase();
const mockLoginCredentials: LoginCredentialsType = {
  email: MOCK_EMAIL,
  password: MOCK_PASSWORD,
};
const mockResponseSuccess: responseType = {
  data: { token: MOCK_TOKEN },
  status: HttpStatus.OK,
};
jest.mock("axios");
describe("login database tests", (): void => {
  afterEach((): void => {
    jest.resetAllMocks();
  });

  it("should return true when login", async (): Promise<void> => {
    (axios.post as jest.Mock).mockResolvedValue(mockResponseSuccess);
    const res: boolean | TokenType = await loginDatabase.login(
      mockLoginCredentials
    );
    expect(res).not.toBe(false);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });

  it("should return false when login", async (): Promise<void> => {
    (axios.post as jest.Mock).mockRejectedValue(false);
    const res: boolean | TokenType = await loginDatabase.login(
      mockLoginCredentials
    );
    expect(res).toBe(false);
    expect(axios.post).toHaveBeenCalledTimes(1);
  });
});
