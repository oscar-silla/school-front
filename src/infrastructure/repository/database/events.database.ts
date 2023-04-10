import { EventsDatabasePort } from "../ports/events.database.port";
import EventModel from "../models/event.model";
import axios from "axios";
import { BaseUrl } from "../../../application/constants";
import { HttpStatus } from "../../http-status";
import EventModelMapper from "../mappers/event.model.mapper";

class EventsDatabase implements EventsDatabasePort {
  private eventModelMapper = new EventModelMapper();

  async findAll(page?: number, limit?: number): Promise<EventModel[] | []> {
    return await axios
      .get(`${BaseUrl}/events?page=${page}&limit=${limit}`)
      .then((res) => {
        if (res.status === HttpStatus.OK) {
          return this.eventModelMapper.toEventModels(res.data);
        } else {
          return [];
        }
      })
      .catch(() => []);
  }
}

export default EventsDatabase;
