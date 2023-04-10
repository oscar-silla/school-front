import { Card } from "../../../components";
import List from "../../../components/list";
import Title from "../../../components/title";
import { useLastNews } from "../../../../application/hooks";
import "../../../styles/last-news.style.css";

const LastNews = () => {
  const { lastNews } = useLastNews();

  return (
    <>
      <div className="section">
        <div className="last-news">
          <div className="jcc">
            <Title title="Últimas novedades" />
          </div>
          <div className="list">
            <List elements={lastNews}>
              <Card />
            </List>
          </div>
        </div>
      </div>
    </>
  );
};

export default LastNews;
