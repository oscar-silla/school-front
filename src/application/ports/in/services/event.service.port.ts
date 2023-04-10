import { Event } from "../../../domain";

export interface EventServicePort {
  getEvents(page?: number, limit?: number): Promise<Event[] | []>;
}
