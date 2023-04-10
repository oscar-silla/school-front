import { useEffect, useState } from "react";
import lastNewsRepositoryAdapter from "../../infrastructure/repository/adapters/last-news.repository.adapter";
import { LastNewType } from "../../infrastructure/repository/types";

const { getAllLastNews } = lastNewsRepositoryAdapter;

const useArticle = () => {
  const [lastNews, setLastNews] = useState<LastNewType[] | []>([]);

  useEffect(() => {
    (async () => {
      setLastNews(await getLastNews());
    })();
  }, []);

  const getLastNews = async (): Promise<LastNewType[] | []> => {
    return await getAllLastNews();
  };

  return {
    lastNews,
  };
};

export default useArticle;
