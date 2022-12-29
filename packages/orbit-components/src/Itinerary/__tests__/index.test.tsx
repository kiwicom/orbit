import React from "react";
import { renderHook, act } from "@testing-library/react";

import { ItineraryProvider, useWidth } from "../context";

describe("Itinerary context", () => {
  it("should have calculated width", () => {
    const wrapper = ({ children }) => <ItineraryProvider>{children}</ItineraryProvider>;

    const { result } = renderHook(() => useWidth(), { wrapper });

    act(() => {
      result.current.setWidths([30, 40, 50]);
    });

    expect(result.current.calculatedWidth).toBe(50);
  });
});
