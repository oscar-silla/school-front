import { EventRepositoryPort } from "../../../application/ports/out/event.repository.port";
import { EventsDatabasePort } from "../ports/events.database.port";
import EventsDatabase from "../database/events.database";
import EventModel from "../models/event.model";
import EventModelMapper from "../mappers/event.model.mapper";
import { Event } from "../../../application/domain";

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
