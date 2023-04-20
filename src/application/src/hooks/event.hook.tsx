import { useEffect, useState } from "react";
import { Event } from "../domain";
import { GetEventsUseCase } from "../usecases/event";
import { GetEventsUseCasePort } from "../ports/in/usecases/event";

export const getEventsUseCase: GetEventsUseCasePort = new GetEventsUseCase();

const useEvent = (page?: number, limit?: number) => {
  const [events, setEvents] = useState<Event[] | []>([]);

  useEffect(() => {
    (async (): Promise<void> => {
      setEvents(await getEvents(page, limit));
    })();
  }, [page, limit]);

  return {
    events,
  };
};

export const getEvents = async (
  page?: number,
  limit?: number
): Promise<Event[] | []> => {
  return await getEventsUseCase.execute(page, limit);
};

export default useEvent;
