import React from "react";
import { Card } from "../../../components";
import List from "../../../components/list";
import { useNews } from "../../../hooks";
import "../../../styles/news.style.css";

const LastNews = () => {
  const { news } = useNews();

  return (
    <div className="last-news">
      <div className="jcc">
        <div className="title">
          <span>Últimas novedades</span>
          <hr />
        </div>
      </div>
      <div className="list">
        <List elements={news}>
          <Card />
        </List>
      </div>
    </div>
  );
};

export default LastNews;
