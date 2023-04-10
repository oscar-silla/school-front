import { useEffect, useState } from "react";
import { Event } from "../domain";
import { GetEventsUseCase } from "../usecases/event/get-events.usecase";
import { GetEventsUseCasePort } from "../ports/in/usecases/event";

const getEventsUseCase: GetEventsUseCasePort = new GetEventsUseCase();

const useEvent = () => {
  const [events, setEvents] = useState<Event[] | []>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setEvents(await getEventsUseCase.execute());
    })();
  }, []);

  return {
    events,
  };
};

export default useEvent;
