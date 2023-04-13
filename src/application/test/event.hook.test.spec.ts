import { Event } from "../src/domain";
import { describe, expect, it } from "@jest/globals";
import { getEvents, getEventsUseCase } from "../src/hooks/event.hook";

describe("Event hook test", (): void => {
  it("Should return a list of events when execute GetEventsUseCase", async () => {
    const mockEvent: Event = new Event();
    mockEvent.setId("1");
    mockEvent.setTitle("ewqe");
    mockEvent.setDescription("eqwe");
    mockEvent.setImg("121");
    mockEvent.setContent("12313");
    const mockResponse: Event[] = [mockEvent];

    jest.spyOn(getEventsUseCase, "execute").mockResolvedValue(mockResponse);

    const actualValue = await getEvents();

    expect(actualValue).toBe(mockResponse);
  });
});
