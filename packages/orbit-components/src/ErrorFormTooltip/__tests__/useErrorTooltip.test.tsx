import { renderHook, act } from "../../test-utils";
import useErrorTooltip from "../hooks/useErrorTooltip";

describe("useErrorTooltip hook", () => {
  it("should call onFocus and show the tooltip", async () => {
    const onFocus = jest.fn();
    const ev: unknown = jest.fn();

    const { result } = renderHook(() => useErrorTooltip({ onFocus, hasTooltip: true }));

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.handleFocus(ev as React.FocusEvent<HTMLInputElement>);
    });

    expect(onFocus).toHaveBeenCalledWith(ev);
    expect(result.current.tooltipShown).toBeTruthy();
  });

  it("should only call onFocus if it has no tooltip", async () => {
    const onFocus = jest.fn();
    const ev: unknown = jest.fn();

    const { result } = renderHook(() => useErrorTooltip({ onFocus, hasTooltip: false }));

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.handleFocus(ev as React.FocusEvent<HTMLInputElement>);
    });

    expect(onFocus).toHaveBeenCalledWith(ev);
    expect(result.current.tooltipShown).toBeFalsy();
  });

  it("should allow manual trigger of the tooltip visibility", async () => {
    const { result } = renderHook(() => useErrorTooltip({ hasTooltip: true }));

    expect(result.current.tooltipShown).toBeFalsy();

    act(() => {
      result.current.setTooltipShown(true);
    });

    expect(result.current.tooltipShown).toBeTruthy();
  });
});
