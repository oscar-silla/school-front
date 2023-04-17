import { Event } from "../../src/domain";
import { describe, expect, it } from "@jest/globals";
import { getEvents, getEventsUseCase } from "../../src/hooks/event.hook";

const id: string = "1";
const title: string = "Christmas day";
const description: string = "Christmas celebration day";
const img: string = "christmas.png";
const content: string = "";
const color: string = "#393B90B2";
const event: Event = new Event(id, title, description, img, content, color);
const events: Event[] = [event];
const emptyList: [] = [];

describe("Event hook test", (): void => {
  it("Should return a list of events when execute GetEventsUsecase", async (): Promise<void> => {
    jest.spyOn(getEventsUseCase, "execute").mockResolvedValue(events);
    const actualValue: Event[] | [] = await getEvents();
    expect(actualValue).toBe(events);
  });

  it("Should return an empty list of events when execute GetEventsUsecase", async (): Promise<void> => {
    jest.spyOn(getEventsUseCase, "execute").mockResolvedValue(emptyList);
    const actualValue: Event[] | [] = await getEvents();
    expect(actualValue).toBe(emptyList);
  });
});
