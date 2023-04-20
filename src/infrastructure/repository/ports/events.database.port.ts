import { EventModel } from "../models";

interface EventsDatabasePort {
  findAll(page?: number, limit?: number): Promise<EventModel[] | []>;
}

export default EventsDatabasePort;
