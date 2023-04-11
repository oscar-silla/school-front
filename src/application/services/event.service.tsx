import { Event } from "../domain";
import { EventRepositoryAdapter } from "../../infrastructure/repository/adapters";
import { EventServicePort } from "../ports/in/services";
import { EventRepositoryPort } from "../ports/out";

export class EventService implements EventServicePort {
  private eventRepository: EventRepositoryPort = new EventRepositoryAdapter();

  async getEvents(page?: number, limit?: number): Promise<Event[] | []> {
    return await this.eventRepository.findAll(page, limit);
  }
}
