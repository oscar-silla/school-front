import { render, screen } from "@testing-library/react";
import LastNews from "../../../src/containers/home/last-news";

describe("Last new container test", (): void => {
  it("Title should has default value", (): void => {
    render(<LastNews />);
    expect(screen.getByText(/Últimas novedades/i).textContent).toBe(
      "Últimas novedades"
    );
  });
});
