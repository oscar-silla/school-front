import { Event } from "../src/domain";
import { describe, expect, it } from "@jest/globals";
import { getEvents, getEventsUseCase } from "../src/hooks/event.hook";

const id: string = "1";
const title: string = "Christmas day";
const description: string = "Christmas celebration day";
const img: string = "christmas.png";
const content: string = "";
const event: Event = new Event(id, title, description, img, content);
const events: Event[] = [event];
const emptyList: [] = [];

describe("Event hook test", (): void => {
  it("Should return a list of events when execute GetEventsUseCase", async () => {
    jest.spyOn(getEventsUseCase, "execute").mockResolvedValue(events);
    const actualValue: Event[] | [] = await getEvents();
    expect(actualValue).toBe(events);
  });

  it("Should return an empty list of events when execute GetEventsUseCase", async () => {
    jest.spyOn(getEventsUseCase, "execute").mockResolvedValue(emptyList);
    const actualValue: Event[] | [] = await getEvents();
    expect(actualValue).toBe(emptyList);
  });
});
