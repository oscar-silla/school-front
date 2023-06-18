import { User } from "../../../domain";

interface UserServicePort {
  login(user: User): Promise<boolean>;
}

export default UserServicePort;
