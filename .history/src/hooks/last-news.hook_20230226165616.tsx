import { useEffect, useState } from "react";
import articlesService from "../services/last-news.service";
import { NewType } from "../types";

const { getAllArticles: getAllStories } = articlesService;

const useArticle = () => {
  const [articles, setArticles] = useState<NewType[] | []>([]);

  useEffect(() => {
    (async () => {
      setArticles(await getArticles());
    })();
  }, []);

  const getArticles = async (): Promise<NewType[] | []> => {
    return await getAllStories();
  };

  return {
    articles,
  };
};

export default useArticle;
