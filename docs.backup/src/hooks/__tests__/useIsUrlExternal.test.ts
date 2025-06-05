import { renderHook } from "@testing-library/react";

import useIsUrlExternal from "../useIsUrlExternal";

function isUrlExternal(url: string) {
  const { result } = renderHook(() => useIsUrlExternal(url));
  return result.current;
}

describe("useIsUrlExernal", () => {
  it("should return true for external URLs", () => {
    expect(isUrlExternal("https://www.wikipedia.org")).toBe(true);
    expect(isUrlExternal("//www.wikipedia.org")).toBe(true);
  });

  it("should return false for local URLs", () => {
    expect(isUrlExternal("/absolute")).toBe(false);
    expect(isUrlExternal("relative")).toBe(false);
    expect(isUrlExternal("#hash")).toBe(false);
    expect(isUrlExternal("?query")).toBe(false);
  });
});
