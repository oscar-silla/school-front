import { getLastNews, getLastNewsUseCase } from "../../src/hooks/last-new.hook";
import { LastNew } from "../../src/domain";

const emptyList: [] = [];
const id: string = "1234";
const title: string = "Dinning room has been reformed!";
const description: string = "Last week, the dinning room was reformed.";
const img: string | undefined = undefined;
const content: string = "<h1>New dinning room</h1>";
const lastNew: LastNew = new LastNew(id, title, description, img, content);
const lastNews: LastNew[] = [lastNew];
describe("Last new hook tests", (): void => {
  it("should return empty list when getLastNews", async (): Promise<void> => {
    jest.spyOn(getLastNewsUseCase, "execute").mockResolvedValue(emptyList);
    const res: LastNew[] | [] = await getLastNews();
    expect(res).toBe(emptyList);
  });
  it("should return last news when getLastNews", async (): Promise<void> => {
    jest.spyOn(getLastNewsUseCase, "execute").mockResolvedValue(lastNews);
    const res: LastNew[] | [] = await getLastNews();
    expect(res).toBe(lastNews);
  });
});
