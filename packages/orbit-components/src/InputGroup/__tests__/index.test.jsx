// @flow
import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputGroup from "..";
import InputField from "../../InputField";
import defaultTheme from "../../defaultTheme";

describe("InputGroup", () => {
  it("should render label", () => {
    render(
      <InputGroup label="Label">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByRole("group", { name: "Label" })).toBeInTheDocument();
  });
  it("should pass dataTest to data-test", () => {
    render(
      <InputGroup dataTest="test">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
  it("should add margin using spaceAfter", () => {
    render(
      <InputGroup spaceAfter="normal">
        <InputField />
      </InputGroup>,
    );
    expect(screen.getByRole("group")).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });
  it("should render help message", async () => {
    render(
      <InputGroup help="help message">
        <InputField />
      </InputGroup>,
    );

    userEvent.tab();
    expect(screen.getByText("help message")).toBeInTheDocument();
    await act(async () => {});
  });
  it("should render error message", async () => {
    render(
      <InputGroup error="error message">
        <InputField />
      </InputGroup>,
    );

    userEvent.tab();
    expect(screen.getByText("error message")).toBeInTheDocument();
    await act(async () => {});
  });

  it("should pass event handlers to child inputs", () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(
      <InputGroup onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
        <InputField />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    userEvent.type(input, "text");
    expect(onChange).toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalled();
    userEvent.tab();
    expect(onBlur).toHaveBeenCalled();
  });
  it("should be able to disable children", () => {
    render(
      <InputGroup disabled>
        <InputField />
      </InputGroup>,
    );

    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("should have ref", () => {
    const ref = React.createRef();

    render(
      <InputGroup ref={ref}>
        <InputField />
      </InputGroup>,
    );

    expect(ref.current).toBeDefined();
  });
});
