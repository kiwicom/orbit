// @flow
import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SegmentedSwitch from "..";

describe("SegmentedSwitch", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const label = "label";
    const dataTest = "test";

    render(
      <SegmentedSwitch
        dataTest={dataTest}
        label={label}
        onChange={onChange}
        onFocus={onFocus}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
      />,
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();

    await act(() => user.tab());
    expect(onFocus).toHaveBeenCalled();

    await act(() => user.click(screen.getByLabelText("Female")));
    expect(screen.getByDisplayValue("Female")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });

  it("should have error", async () => {
    const error = "Error message";
    const label = "Gender";

    render(
      <SegmentedSwitch
        label={label}
        onChange={() => {}}
        error={error}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female", disabled: true },
        ]}
      />,
    );

    await act(() => user.hover(screen.getByText(label)));
    expect(screen.getByText(error)).toBeInTheDocument();
    expect(screen.getByLabelText("Female")).toBeDisabled();
  });

  it("should have help", async () => {
    const help = "Help message";

    render(
      <SegmentedSwitch
        label="Gender"
        onChange={() => {}}
        help={help}
        options={[
          { label: "Male", value: "Male" },
          { label: "Female", value: "Female" },
        ]}
      />,
    );

    await act(() => user.hover(screen.getByText("Gender")));
    expect(screen.getByText(help)).toBeInTheDocument();
  });
});
