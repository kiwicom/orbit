import { renderHook, act } from "@testing-library/react-hooks";

import useCopyToClipboard from "../useCopyToClipboard";

jest.mock("copy-to-clipboard", () => () => {});

describe("useCopyToClipboard", () => {
  it("should have correct timer", () => {
    const { result } = renderHook(() => useCopyToClipboard());

    act(() => {
      jest.useFakeTimers();
      result.current[1]("kek");
    });

    expect(result.current[0]).toBe(true);

    act(() => {
      jest.runAllTimers();
    });

    expect(result.current[0]).toBe(false);
  });
});
