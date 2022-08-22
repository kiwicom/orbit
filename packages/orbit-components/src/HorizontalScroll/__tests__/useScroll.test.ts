import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";

import useScroll from "../useScroll";

const DEFAULT_VALUES = {
  clickStartX: undefined,
  scrollStartX: undefined,
  isDragging: false,
  direction: 0,
  momentum: 0,
  lastScrollX: 0,
  speed: 0,
  reachedStart: false,
};

describe("useScroll", () => {
  it("should have default values", () => {
    const elem = document.createElement("div");
    const ref = {
      current: elem,
    };

    const { result } = renderHook(() => useScroll(ref));

    expect(result.current).toEqual(DEFAULT_VALUES);
  });
  it("should drag", () => {
    const elem = document.createElement("div");
    const ref = {
      current: elem,
    };

    const { result } = renderHook(() => useScroll(ref));

    if (ref.current) {
      ref.current.scrollLeft += 20;
      fireEvent.mouseDown(ref.current, { screenX: 10 });
    }

    if (ref.current) {
      fireEvent.mouseMove(ref.current, { screenX: 8 });
    }

    expect(result.current).toEqual({
      clickStartX: 10,
      direction: 1,
      isDragging: true,
      lastScrollX: 8,
      momentum: 0.48,
      scrollStartX: 20,
      speed: 0.48,
      reachedStart: false,
    });
  });
});
