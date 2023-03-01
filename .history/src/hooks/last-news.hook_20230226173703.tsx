import { useEffect, useState } from "react";
import lastNewsService from "../services/last-news.service";
import { LastNewType } from "../types";

const { getAllLastNews } = lastNewsService;

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
