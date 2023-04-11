import { useEffect, useState } from "react";
import { Event } from "../domain";
import { GetEventsUseCase } from "../usecases/event/get-events.usecase";
import { GetEventsUseCasePort } from "../ports/in/usecases/event";

const getEventsUseCase: GetEventsUseCasePort = new GetEventsUseCase();

const useEvent = (page?: number, limit?: number) => {
  const [events, setEvents] = useState<Event[] | []>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setEvents(await getEventsUseCase.execute(page, limit));
    })();
  }, [page, limit]);

  return {
    events,
  };
};

export default useEvent;
