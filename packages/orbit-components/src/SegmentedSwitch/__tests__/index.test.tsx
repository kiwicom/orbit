import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
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

    await user.tab();
    expect(onFocus).toHaveBeenCalled();

    await user.click(screen.getByLabelText("Female"));
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

    await user.hover(screen.getByText(label));
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

    await user.hover(screen.getByText("Gender"));
    expect(screen.getByText(help)).toBeInTheDocument();
  });
});
