import EventModel from "../models/event.model";

export interface EventsDatabasePort {
  findAll(page?: number, limit?: number): Promise<EventModel[] | []>;
}
