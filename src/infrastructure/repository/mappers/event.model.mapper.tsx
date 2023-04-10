import EventModel from "../models/event.model";
import { Event } from "../../../application/domain";
import { EventType } from "../types";

class EventModelMapper {
  toEvent(eventModel: EventModel): Event {
    const event: Event = new Event();
    event.setId(eventModel?.getId() ?? "");
    event.setTitle(eventModel?.getTitle() ?? "");
    event.setDescription(eventModel?.getDescription() ?? "");
    event.setImg(eventModel?.getImg() ?? "");
    event.setContent(eventModel?.getContent() ?? "");
    return event;
  }

  toEvents(eventModels: EventModel[] | []): Event[] | [] {
    return (
      eventModels?.map((eventModel: EventModel) => this.toEvent(eventModel)) ??
      []
    );
  }

  toEventModel(event: Event | EventType): EventModel {
    const eventModel: EventModel = new EventModel();
    if (event instanceof Event) {
      eventModel.setTitle(event.getTitle());
      eventModel.setDescription(event.getDescription());
      eventModel.setImg(event.getImg());
      eventModel.setContent(event?.getContent() ?? "");
    } else {
      eventModel.setId(event.id);
      eventModel.setTitle(event.title);
      eventModel.setDescription(event.description);
      eventModel.setImg(event.img);
      eventModel.setContent(event.content);
    }
    return eventModel;
  }

  toEventModels(events: Event[] | EventType[]): EventModel[] {
    return events.map((event: Event | EventType) => this.toEventModel(event));
  }
}

export default EventModelMapper;
