import { Event } from "../src/domain";
import { getEvents } from "../src/hooks/event.hook";
import { describe, expect, it } from "@jest/globals";

describe("Event hook test", (): void => {
  it("Should return a list of events when execute GetEventsUseCase", async () => {
    const events: Event[] | [] = await getEvents();
    expect(events.length).toBeGreaterThan(0);
  });
});
