import { EventModel } from "../models";
import { EventsDatabasePort } from "../ports";
import { EventModelMapper } from "../mappers";
import axios from "axios";
import { HttpStatus } from "../../http-status";
import { BaseUrl } from "../../../application/src/constants";

class EventsDatabase implements EventsDatabasePort {
  private eventModelMapper: EventModelMapper = new EventModelMapper();

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
