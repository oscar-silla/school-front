import EventModel from "../models/event.model";

interface EventsDatabasePort {
  findAll(page?: number, limit?: number): Promise<EventModel[] | []>;
}

export default EventsDatabasePort;
