import { Event } from "../../../domain";

interface EventServicePort {
  getEvents(page?: number, limit?: number): Promise<Event[] | []>;
}

export default EventServicePort;
