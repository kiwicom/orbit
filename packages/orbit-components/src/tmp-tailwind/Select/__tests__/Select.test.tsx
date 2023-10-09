import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen, act } from "../../../test-utils";
import Select from "..";
import SPACINGS_AFTER from "../../../common/getSpacingToken/consts";

describe("Select", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const placeholder = "Default placeholder";
    const dataTest = "test";
    const label = "label";
    const tabIndex = "-1";
    const name = "name";
    const id = "test-id";
    const onBlur = jest.fn();
    const onFocus = jest.fn();
    const onChange = jest.fn();
    const objectOptions = [
      { value: "1", label: "One" },
      { value: "2", label: "Two" },
      { value: "3", label: "Three" },
      { value: "4", label: "Four" },
      { value: "hidden-five", label: "Hidden Five" },
      { disabled: true, value: "disabled-six", label: "Disabled Six" },
    ];
    const spaceAfter = SPACINGS_AFTER.NORMAL;
    const dataAttrs = {
      "data-recording-ignore": true,
    };

    render(
      <Select
        id={id}
        label={label}
        value="1"
        name={name}
        placeholder={placeholder}
        options={objectOptions}
        onChange={onChange}
        tabIndex={tabIndex}
        dataTest={dataTest}
        onFocus={onFocus}
        onBlur={onBlur}
        spaceAfter={spaceAfter}
        dataAttrs={dataAttrs}
      />,
    );

    const select = screen.getByRole("combobox");

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(select).toHaveAttribute("id", id);
    expect(select).toHaveAttribute("tabindex", "-1");
    expect(select).toHaveAttribute("data-state", "ok");
    expect(select).toHaveAttribute("data-recording-ignore");
    expect(select).toHaveAttribute("name", name);
    expect(select).not.toBeInvalid();
    expect(screen.getByLabelText(label)).toBeInTheDocument();
    expect(screen.getByText(placeholder)).toBeInTheDocument();

    await user.selectOptions(select, screen.getByText("One"));
    expect(onChange).toHaveBeenCalled();
    await user.tab();
    expect(onFocus).toHaveBeenCalled();
    await user.tab();
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have custom value text", () => {
    render(<Select customValueText="blin" options={[{ value: "1", label: "One" }]} />);
    expect(screen.getByText("blin")).toBeInTheDocument();
  });

  it("should have passed width", () => {
    const width = "100px";
    render(<Select width={width} label="label" options={[{ value: "1", label: "One" }]} />);
    expect(document.querySelector("label")).toHaveStyle({ width });
  });

  it("should have error message", async () => {
    render(
      <Select dataTest="error-select" error="error" options={[{ value: "1", label: "One" }]} />,
    );
    const select = screen.getByTestId("error-select");

    await user.tab();
    expect(screen.getByText("error")).toBeInTheDocument();
    expect(select).toBeInvalid();
    expect(select).toHaveAccessibleDescription("error");
    await act(async () => {});
  });

  it("should have help message", async () => {
    render(<Select dataTest="help-select" help="help" options={[{ value: "1", label: "One" }]} />);
    const select = screen.getByTestId("help-select");

    await user.tab();
    expect(screen.getByText("help")).toBeInTheDocument();
    expect(select).toHaveAccessibleDescription("help");
    await act(async () => {});
  });

  it("should be disabled", () => {
    render(<Select options={[{ value: "1", label: "One" }]} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });
});
