import { Event } from "../domain";
import { EventServicePort } from "../ports/in/services/event.service.port";
import { EventRepositoryPort } from "../ports/out/event.repository.port";
import { EventRepositoryAdapter } from "../../infrastructure/repository/adapters";

export class EventService implements EventServicePort {
  private eventRepository: EventRepositoryPort = new EventRepositoryAdapter();

  async getEvents(page?: number, limit?: number): Promise<Event[] | []> {
    return await this.eventRepository.findAll(page, limit);
  }
}
