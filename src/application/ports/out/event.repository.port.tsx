import { Event } from "../../domain";

interface EventRepositoryPort {
  findAll(page?: number, limit?: number): Promise<Event[] | []>;
}

export default EventRepositoryPort;
