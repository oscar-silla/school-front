import Events from "../src/containers/home/events";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

describe("Events tests", () => {
  it("Title should have default value", function (): void {
    render(<Events />);
    expect(screen.getByTestId(/event-title/i).textContent).toBe("Eventos");
  });
});
