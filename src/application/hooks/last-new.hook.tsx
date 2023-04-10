import { useEffect, useState } from "react";
import { GetLastNewsUseCasePort } from "../ports/in/usecases/lastnew";
import { LastNew } from "../domain";
import { GetLastNewsUseCase } from "../usecases";

const getLastNewsUseCase: GetLastNewsUseCasePort = new GetLastNewsUseCase();

const useLastNew = () => {
  const [lastNews, setLastNews] = useState<LastNew[] | []>([]);

  useEffect(() => {
    (async () => {
      setLastNews(await getLastNewsUseCase.execute());
    })();
  }, []);

  return {
    lastNews,
  };
};

export default useLastNew;
