import React from "react";
import { Card } from "../../../components";
import List from "../../../components/list";
import { useArticle } from "../../../hooks";
import "../../../styles/news.styles.css";

const LastNews = () => {
  const { articles } = useArticle();

  return (
    <div className="last-news">
      <div className="jcc">
        <div className="title">
          <span>Últimas novedades</span>
          <hr />
        </div>
      </div>
      <div className="list">
        <List elements={articles}>
          <Card />
        </List>
      </div>
    </div>
  );
};

export default LastNews;
