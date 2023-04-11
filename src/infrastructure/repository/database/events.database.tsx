import EventModel from "../models/event.model";
import axios from "axios";
import { BaseUrl } from "../../../application/constants";
import { HttpStatus } from "../../http-status";
import { EventsDatabasePort } from "../ports";
import { EventModelMapper } from "../mappers";

class EventsDatabase implements EventsDatabasePort {
  private eventModelMapper = new EventModelMapper();

  async findAll(
    page: number = 0,
    limit: number = 3
  ): Promise<EventModel[] | []> {
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
