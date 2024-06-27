import React from "react";

import { renderHook, act } from "../../test-utils";
import { ItineraryProvider, useItinerarySegmentMinimalColumnWidth } from "../context";

describe("Itinerary context", () => {
  it("should have minimum width of 70", () => {
    const wrapper = ({ children }) => <ItineraryProvider>{children}</ItineraryProvider>;

    const { result } = renderHook(() => useItinerarySegmentMinimalColumnWidth(), { wrapper });

    act(() => {
      result.current.setItinerarySegmentMinimalColumnWidth(30);
      result.current.setItinerarySegmentMinimalColumnWidth(50);
      result.current.setItinerarySegmentMinimalColumnWidth(40);
    });

    expect(result.current.itinerarySegmentMinimalColumnWidth).toBe(70);
  });
  it("should have calculated width", () => {
    const wrapper = ({ children }) => <ItineraryProvider>{children}</ItineraryProvider>;

    const { result } = renderHook(() => useItinerarySegmentMinimalColumnWidth(), { wrapper });

    act(() => {
      result.current.setItinerarySegmentMinimalColumnWidth(60);
      result.current.setItinerarySegmentMinimalColumnWidth(75);
      result.current.setItinerarySegmentMinimalColumnWidth(71);
    });

    expect(result.current.itinerarySegmentMinimalColumnWidth).toBe(75);
  });
});
