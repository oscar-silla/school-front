import { Event } from "../../../../domain";

export interface GetEventsUseCasePort {
  execute(page?: number, limit?: number): Promise<Event[] | []>;
}
