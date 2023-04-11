import { Event } from "../../../../domain";

interface GetEventsUseCasePort {
  execute(page?: number, limit?: number): Promise<Event[] | []>;
}

export default GetEventsUseCasePort;
