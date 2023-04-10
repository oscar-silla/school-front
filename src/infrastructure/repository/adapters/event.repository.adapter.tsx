import EventsDatabase from "../database/events.database";
import EventModel from "../models/event.model";
import { Event } from "../../../application/domain";
import { EventRepositoryPort } from "../../../application/ports/out";
import { EventsDatabasePort } from "../ports";
import { EventModelMapper } from "../mappers";

class EventRepositoryAdapter implements EventRepositoryPort {
  private eventsDatabase: EventsDatabasePort = new EventsDatabase();
  private eventModelMapper = new EventModelMapper();

  async findAll(page?: number, limit?: number): Promise<Event[] | []> {
    const response: EventModel[] | [] = await this.eventsDatabase.findAll(
      page,
      limit
    );
    return this.eventModelMapper.toEvents(response);
  }
}

export default EventRepositoryAdapter;
