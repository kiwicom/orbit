// @flow
import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import SegmentedSwitch from "..";

describe("SegmentedSwitch", () => {
  it("should have expected DOM output", () => {
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

    // $FlowFixMe
    userEvent.tab(screen.getByLabelText("Male"));
    expect(onFocus).toHaveBeenCalled();

    userEvent.click(screen.getByLabelText("Female"));
    expect(screen.getByDisplayValue("Female")).toBeInTheDocument();
    expect(onChange).toHaveBeenCalled();
  });

  it("should have error", () => {
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

    userEvent.hover(screen.getByText(label));
    expect(screen.getByText(error)).toBeInTheDocument();
    expect(screen.getByLabelText("Female")).toBeDisabled();
  });

  it("should have help", () => {
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

    userEvent.hover(screen.getByText("Gender"));
    expect(screen.getByText(help)).toBeInTheDocument();
  });
});
