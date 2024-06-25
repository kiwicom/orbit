import React from "react";

import { renderHook, act } from "../../test-utils";
import { ItineraryProvider, useWidth } from "../context";

describe("Itinerary context", () => {
  it("should have minimum width of 70", () => {
    const wrapper = ({ children }) => <ItineraryProvider>{children}</ItineraryProvider>;

    const { result } = renderHook(() => useWidth(), { wrapper });

    act(() => {
      result.current.setWidth(30);
      result.current.setWidth(50);
      result.current.setWidth(40);
    });

    expect(result.current.calculatedWidth).toBe(70);
  });
  it("should have calculated width", () => {
    const wrapper = ({ children }) => <ItineraryProvider>{children}</ItineraryProvider>;

    const { result } = renderHook(() => useWidth(), { wrapper });

    act(() => {
      result.current.setWidth(60);
      result.current.setWidth(75);
      result.current.setWidth(71);
    });

    expect(result.current.calculatedWidth).toBe(75);
  });
});
