import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Textarea from "..";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

describe("Textarea", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const name = "name";
    const label = "Label";
    const value = "value";
    const placeholder = "placeholder";
    const dataTest = "test";
    const maxLength = 200;
    const fullHeight = true;
    const onChange = jest.fn();
    const spaceAfter = SPACINGS_AFTER.NORMAL;
    const dataAttrs = {
      "data-sample": "Sample",
    };

    render(
      <Textarea
        name={name}
        label={label}
        value={value}
        rows={4}
        fullHeight={fullHeight}
        placeholder={placeholder}
        maxLength={maxLength}
        help={<div>Something useful.</div>}
        onChange={onChange}
        dataTest={dataTest}
        spaceAfter={spaceAfter}
        dataAttrs={dataAttrs}
      />,
    );

    const textarea = screen.getByRole("textbox");

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByDisplayValue(value)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument();

    await act(() => user.tab());
    expect(screen.getByText("Something useful.")).toBeInTheDocument();
    expect(textarea).toHaveAttribute("maxlength", maxLength.toString());
    expect(textarea).toHaveAttribute("rows", "4");
    expect(textarea).toHaveAttribute("name", name);
    expect(textarea).toHaveAttribute("data-sample", "Sample");
    expect(textarea).not.toBeInvalid();
    expect(textarea.parentElement).toHaveStyle({ marginBottom: "12px" });
    expect(textarea).toHaveStyle({ padding: "12px" });

    await act(() => user.type(textarea, "kek"));
    expect(onChange).toHaveBeenCalled();
  });

  it("should have focus and blur", async () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();

    render(<Textarea onFocus={onFocus} onBlur={onBlur} />);
    await user.tab();
    expect(onFocus).toHaveBeenCalled();
    await user.tab();
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have error", async () => {
    render(<Textarea error="error" size="small" />);
    const textarea = screen.getByRole("textbox");

    await act(() => user.tab());
    expect(screen.getByText("error")).toBeInTheDocument();
    expect(textarea).toHaveStyle({ padding: "8px 12px" });
    expect(textarea).toBeInvalid();
    expect(textarea).toHaveAccessibleDescription("error");
    // Needs to flush async `floating-ui` hooks
    // https://github.com/floating-ui/floating-ui/issues/1520
    await act(async () => {});
  });
});
