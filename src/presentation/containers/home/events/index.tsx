import { Card } from "../../../components";
import List from "../../../components/list";
import Title from "../../../components/title";
import useEvent from "../../../../application/hooks/event.hook";
import "../../../styles/event.style.css";

const Events = () => {
  const { events } = useEvent();
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
