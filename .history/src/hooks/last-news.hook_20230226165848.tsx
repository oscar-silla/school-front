import { useEffect, useState } from "react";
import lastNewsService from "../services/last-news.service";
import { NewType } from "../types";

const { getAllLastNews } = lastNewsService;

const useArticle = () => {
  const [lastNews, setLastNews] = useState<NewType[] | []>([]);

  useEffect(() => {
    (async () => {
      setLastNews(await getLastNews());
    })();
  }, []);

  const getLastNews = async (): Promise<NewType[] | []> => {
    return await getAllLastNews();
  };

  return {
    lastNews,
  };
};

export default useArticle;
