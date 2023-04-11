import { Event } from "../../domain";
import { EventService } from "../../services/event.service";
import { GetEventsUseCasePort } from "../../ports/in/usecases/event";
import { EventServicePort } from "../../ports/in/services";

export class GetEventsUseCase implements GetEventsUseCasePort {
  private eventService: EventServicePort = new EventService();

  async execute(page?: number, limit?: number): Promise<Event[]> {
    return await this.eventService.getEvents(page, limit);
  }
}
