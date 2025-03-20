import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import InputGroup from "..";
import InputField from "../../InputField";

describe("InputGroup", () => {
  const user = userEvent.setup();

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
  it("should render help message", async () => {
    render(
      <InputGroup help="help message">
        <InputField />
      </InputGroup>,
    );

    await user.tab();
    expect(screen.getByText("help message")).toBeInTheDocument();
  });
  it("should render error message", async () => {
    render(
      <InputGroup error="error message">
        <InputField />
      </InputGroup>,
    );

    await user.tab();
    expect(screen.getByText("error message")).toBeInTheDocument();
  });

  it("should pass event handlers to child inputs", async () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    render(
      <InputGroup onChange={onChange} onFocus={onFocus} onBlur={onBlur}>
        <InputField />
      </InputGroup>,
    );
    const input = screen.getByRole("textbox");
    await user.type(input, "text");
    expect(onChange).toHaveBeenCalled();
    expect(onFocus).toHaveBeenCalled();
    await user.tab();
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
    const ref = React.createRef<HTMLFieldSetElement>();

    render(
      <InputGroup ref={ref}>
        <InputField />
      </InputGroup>,
    );

    expect(ref.current).toBeDefined();
  });
});
