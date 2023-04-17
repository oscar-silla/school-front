import { useState } from "react";
import Slogan from "../domain/slogan";
import { GetSloganUseCasePort } from "../ports/in/usecases/slogan";
import { GetSloganUseCase } from "../usecases/slogan";

const getSloganUseCase: GetSloganUseCasePort = new GetSloganUseCase();

const useSlogan = () => {
  const [slogan, setSlogan] = useState<Slogan | null>();

  const getSlogan = async (): Promise<Slogan | null> => {
    return await getSloganUseCase.execute();
  };
};

export default useSlogan;
