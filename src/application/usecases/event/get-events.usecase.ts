import { Event } from "../../domain";
import { GetEventsUseCasePort } from "../../ports/in/usecases/event/get-events.usecase.port";
import { EventService } from "../../services/event.service";
import { EventServicePort } from "../../ports/in/services/event.service.port";

export class GetEventsUseCase implements GetEventsUseCasePort {
  private eventService: EventServicePort = new EventService();

  async execute(page?: number, limit?: number): Promise<Event[]> {
    return await this.eventService.getEvents(page, limit);
  }
}
