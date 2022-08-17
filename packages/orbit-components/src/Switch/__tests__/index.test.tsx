import * as React from "react";
import { screen, render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import KEY_CODE_MAP from "../../common/keyMaps";
import Switch from "..";

describe("Switch", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const onChange = jest.fn();
    const onFocus = jest.fn();

    render(<Switch dataTest={dataTest} checked onChange={onChange} onFocus={onFocus} />);

    userEvent.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalled();

    fireEvent.keyDown(screen.getByTestId("test"), { keyCode: KEY_CODE_MAP.SPACE });
    fireEvent.keyDown(screen.getByTestId("test"), { keyCode: KEY_CODE_MAP.ENTER });
    expect(onChange).toHaveBeenCalledTimes(3);

    userEvent.tab();
    expect(onFocus).toHaveBeenCalled();
    expect(screen.getByRole("switch")).toHaveAttribute("checked");
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });

  it("should be disabled", () => {
    const onChange = jest.fn();
    render(<Switch checked onChange={onChange} disabled />);

    userEvent.click(screen.getByRole("switch"));
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByRole("switch")).toHaveAttribute("disabled");
  });
});
