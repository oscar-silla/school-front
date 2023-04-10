import { Event } from "../../domain";

export interface EventRepositoryPort {
  findAll(page?: number, limit?: number): Promise<Event[] | []>;
}
