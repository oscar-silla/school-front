import { useEffect, useState } from "react";
import { GetLastNewsUseCasePort } from "../ports/in/usecases/lastnew";
import { LastNew } from "../domain";
import { GetLastNewsUseCase } from "../usecases";

export const getLastNewsUseCase: GetLastNewsUseCasePort =
  new GetLastNewsUseCase();

const useLastNew = (page?: number, limit?: number) => {
  const [lastNews, setLastNews] = useState<LastNew[] | []>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setLastNews(await getLastNews(page, limit));
    })();
  }, [limit, page]);

  return {
    lastNews,
  };
};

export const getLastNews = async (
  page?: number,
  limit?: number
): Promise<LastNew[] | []> => {
  return await getLastNewsUseCase.execute(page, limit);
};

export default useLastNew;
