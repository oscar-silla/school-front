import { Card } from "../../../components";
import List from "../../../components/list";
import Title from "../../../components/title";
import "../../../styles/event.style.css";
import { useEvent } from "../../../../application/src/hooks";

const Events = () => {
  const { events } = useEvent(0, 3);
  return (
    <div className="section">
      <div className="events">
        <div className="jcc">
          <Title title="Eventos" />
        </div>
        <div className="list">
          <List elements={events}>
            <Card />
          </List>
        </div>
      </div>
    </div>
  );
};

export default Events;
