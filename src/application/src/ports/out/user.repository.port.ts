import { User } from "../../domain";
import { TokenType } from "../../../../infrastructure/repository/types";

interface UserRepositoryPort {
  login(user: User): Promise<boolean | TokenType>;
}

export default UserRepositoryPort;
