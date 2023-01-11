import type { SyntheticEvent } from "react";
import { renderHook, act } from "@testing-library/react-hooks/server";

import useErrorTooltip from "../hooks/useErrorTooltip";

describe("useErrorTooltip hook", () => {
  it("should call onFocus and show the tooltip", async () => {
    const onFocus = jest.fn();
    const ev: unknown = jest.fn();

    const { result, hydrate } = renderHook(() => useErrorTooltip({ onFocus, hasTooltip: true }));

    hydrate();

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.handleFocus(ev as SyntheticEvent<HTMLInputElement, Event>);
    });

    expect(onFocus).toHaveBeenCalledWith(ev);
    expect(result.current.tooltipShown).toBeTruthy();
  });

  it("should only call onFocus if it has no tooltip", async () => {
    const onFocus = jest.fn();
    const ev: unknown = jest.fn();

    const { result, hydrate } = renderHook(() => useErrorTooltip({ onFocus, hasTooltip: false }));

    hydrate();

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.handleFocus(ev as SyntheticEvent<HTMLInputElement, Event>);
    });

    expect(onFocus).toHaveBeenCalledWith(ev);
    expect(result.current.tooltipShown).toBeFalsy();
  });

  it("should allow manual trigger of the tooltip visibility", async () => {
    const { result, hydrate } = renderHook(() => useErrorTooltip({ hasTooltip: true }));

    hydrate();

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.setTooltipShown(true);
    });

    expect(result.current.tooltipShown).toBeTruthy();
  });
});
