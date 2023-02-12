import { useEffect, useState } from "react";
import newsService from "../services/story.service";
import { NewType } from "../types";

const { getAllStories } = newsService;

const useNews = () => {
  const [news, setNews] = useState<NewType[] | []>([]);

  useEffect(() => {
    (async () => {
      setNews(await getNews());
    })();
  }, []);

  const getNews = async (): Promise<NewType[] | []> => {
    return await getAllStories();
  };

  return {
    news,
  };
};

export default useNews;
