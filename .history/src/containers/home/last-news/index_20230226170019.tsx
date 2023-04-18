import React from "react";
import { Card } from "../../../components";
import List from "../../../components/list";
import { useLastNews } from "../../../hooks";
import "../../../styles/styles.css";

const LastNews = () => {
  const { lastNews } = useLastNews();

  return (
    <div className="last-news">
      <div className="jcc">
        <div className="title">
          <span>Últimas novedades</span>
          <hr />
        </div>
      </div>
      <div className="list">
        <List elements={lastNews}>
          <Card />
        </List>
      </div>
    </div>
  );
};

export default LastNews;
