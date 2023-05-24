import React from "react";
import { Card } from "../../../components";
import List from "../../../components/list";
import Title from "../../../components/title";
import "./styles.css";
import { useEvent } from "../../../../../application/src/hooks";
import Box from "../../../components/box";
import MantainanceImg from "../../../components/mantainance-img";
import Subtitle from "../../../components/subtitle";
import { NoContent } from "../../../../../application/src/constants";

const Events = () => {
  const { events } = useEvent(0, 3);
  return (
    <Box className="section">
      <Box className="events">
        <Box className="jcc">
          <Title title="Eventos" />
        </Box>
        {events.length > 0 ? (
          <Box className="list">
            <List elements={events}>
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

export default Events;
