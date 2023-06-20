import { useLogin } from "../../src/hooks";
import { act, renderHook } from "@testing-library/react";
import { loginUseCase } from "../../src/hooks/login.hook";

describe("Login hook tests", (): void => {
  it("should handle login", async (): Promise<void> => {
    const { result } = renderHook(() => useLogin());
    jest.spyOn(loginUseCase, "execute").mockResolvedValue(true);
    act((): void => {
      result.current.handleChange({
        target: { name: "email", value: "example@mail.com" },
      });
      result.current.handleChange({
        target: { name: "password", value: "password" },
      });
    });
    await act(async (): Promise<void> => {
      await result.current.handleLogin({ preventDefault: jest.fn() });
    });
    expect(result.current.isLogged).toBe(true);
  });
});
