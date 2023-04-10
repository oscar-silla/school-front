import { useEffect, useState } from "react";
import { Event } from "../domain";
import { GetEventsUseCasePort } from "../ports/in/usecases/event/get-events.usecase.port";
import { GetEventsUseCase } from "../usecases/event/get-events.usecase";

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
