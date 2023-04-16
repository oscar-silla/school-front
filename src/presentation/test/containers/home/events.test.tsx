import Events from "../../../src/containers/home/events";
import { cleanup, render, screen } from "@testing-library/react";

afterEach(cleanup);

describe("Events tests", (): void => {
  it("Title should have default value", function (): void {
    render(<Events />);
    expect(screen.getByText(/Eventos/i).textContent).toBe("Eventos");
  });
});
