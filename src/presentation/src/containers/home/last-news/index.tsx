import { Card } from "../../../components";
import List from "../../../components/list";
import Title from "../../../components/title";
import { useLastNews } from "../../../../../application/src/hooks";
import "./styles.css";
import MantainanceImg from "../../../components/mantainance-img";
import Subtitle from "../../../components/subtitle";
import { NoContent } from "../../../../../application/src/constants";
import Box from "../../../components/box";

const LastNews = () => {
  const { lastNews } = useLastNews(0, 3);
  return (
    <Box className="section">
      <Box className="last-news">
        <Box className="jcc">
          <Title title="Últimas novedades" />
        </Box>
        {lastNews.length > 0 ? (
          <Box className="list">
            <List elements={lastNews}>
              <Card />
            </List>
          </Box>
        ) : (
          <Box className="jcc">
            <Box>
              <Box className="jcc">
                <MantainanceImg className={"w60 h60 mt2"} />
              </Box>
              <Box className="jcc">
                <Subtitle text={NoContent} />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default LastNews;
