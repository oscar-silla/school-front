import { ChangeEvent, FormEvent, useState } from "react";
import { User } from "../domain";
import { LoginUseCasePort } from "../ports/in/usecases/user";
import { LoginUseCase } from "../usecases/user";
import { LoginCredentialsType } from "../../../infrastructure/repository/types";

const loginUseCase: LoginUseCasePort = new LoginUseCase();

const useLogin = () => {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentialsType>({
      email: "",
      password: "",
    });
  const [isLogged, setIsLogged] = useState<boolean>();

  const handleLogin = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const user: User = new User();
    user.setLoginCredentials(loginCredentials);
    setIsLogged(await loginUseCase.execute(user));
  };

  const handleChange = (event: ChangeEvent<HTMLFormElement>): void => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  return {
    handleLogin,
    handleChange,
    isLogged,
  };
};

export default useLogin;
