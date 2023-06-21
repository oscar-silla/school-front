import { useState } from "react";
import { User } from "../domain";
import { LoginUseCasePort } from "../ports/in/usecases/user";
import { LoginCredentialsType } from "../../../infrastructure/repository/types";
import { LoginUseCase } from "../usecases/user";

export let loginUseCase: LoginUseCasePort = new LoginUseCase();

type eventType = {
  target: { name: string; value: string };
};
type submitType = {
  preventDefault(): void;
};

const useLogin = () => {
  const [loginCredentials, setLoginCredentials] =
    useState<LoginCredentialsType>({
      email: "",
      password: "",
    });
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleLogin = async (event: submitType): Promise<void> => {
    event.preventDefault();
    const user: User = new User();
    user.setLoginCredentials(loginCredentials);
    const isLogged: boolean = await loginUseCase.execute(user);
    if (!isLogged) {
      setShowAlert(true);
      restoreAlert();
    }
  };

  const handleChange = (event: eventType): void => {
    setLoginCredentials({
      ...loginCredentials,
      [event.target.name]: event.target.value,
    });
  };

  const restoreAlert = (): void => {
    setTimeout((): void => {
      setShowAlert(false);
    }, 3000);
  };

  return {
    handleLogin,
    handleChange,
    showAlert,
  };
};

export default useLogin;
