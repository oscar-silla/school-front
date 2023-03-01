import { useEffect, useState } from "react";
import { EventService } from "../services";
import { EventType } from "../types";

const { getPaginatedEvents } = EventService;

const useEvent = () => {
  const [events, setEvents] = useState<EventType[] | []>([]);

  useEffect(() => {
    (async () => {
      setEvents(await getEvents());
    })();
  }, []);

  const getEvents = async (page?: number, limit?: number) => {
    return await getPaginatedEvents(page, limit);
  };

  return {
    events,
  };
};

export default useEvent;
