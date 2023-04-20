import { Event } from "../../domain";
import { EventService } from "../../services";
import { EventServicePort } from "../../ports/in/services";
import { GetEventsUseCasePort } from "../../ports/in/usecases/event";

class GetEventsUseCase implements GetEventsUseCasePort {
  private eventService: EventServicePort = new EventService();

  async execute(page?: number, limit?: number): Promise<Event[]> {
    return await this.eventService.getEvents(page, limit);
  }
}

export default GetEventsUseCase;
