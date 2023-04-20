import { Event } from "../../../application/src/domain";
import { EventModel } from "../models";
import { EventRepositoryPort } from "../../../application/src/ports/out";
import { EventsDatabase } from "../database";
import { EventsDatabasePort } from "../ports";
import { EventModelMapper } from "../mappers";

class EventRepositoryAdapter implements EventRepositoryPort {
  private eventsDatabase: EventsDatabasePort = new EventsDatabase();
  private eventModelMapper: EventModelMapper = new EventModelMapper();

  async findAll(page?: number, limit?: number): Promise<Event[] | []> {
    const response: EventModel[] | [] = await this.eventsDatabase.findAll(
      page,
      limit
    );
    return this.eventModelMapper.toEvents(response);
  }
}

export default EventRepositoryAdapter;
