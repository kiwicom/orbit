import * as React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import InputField from "..";
import ButtonLink from "../../ButtonLink";
import TextLink from "../../TextLink";
import Visibility from "../../icons/Visibility";
import Search from "../../icons/Search";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import { INPUTMODE } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("InputField", () => {
  const user = userEvent.setup();

  it("should have expected DOM output", async () => {
    const ref = React.createRef<HTMLInputElement>();
    const { container } = render(
      <InputField
        ref={ref}
        id="id"
        size="normal"
        type="text"
        name="name"
        label="Label"
        value="value"
        placeholder="placeholder"
        minLength={1}
        maxLength={10}
        dataTest="test"
        tabIndex={0}
        readOnly
        autoComplete="off"
        spaceAfter={SPACINGS_AFTER.NORMAL}
        inputMode={INPUTMODE.NUMERIC}
        prefix={<Search dataTest="prefix" />}
        suffix={<ButtonLink dataTest="suffix" type="primary" compact iconLeft={<Visibility />} />}
        help={
          <div data-test="help">
            Did you mean <TextLink>something</TextLink>?
          </div>
        }
        dataAttrs={{
          "data-recording-ignore": true,
        }}
      />,
    );
    expect(screen.getByLabelText(/Label/)).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: /Label/ });
    expect(ref.current).toEqual(input);
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("value", "value");
    expect(input).toHaveAttribute("placeholder", "placeholder");
    expect(input).toHaveAttribute("minlength", "1");
    expect(input).toHaveAttribute("maxlength", "10");
    expect(input).toHaveAttribute("inputmode", INPUTMODE.NUMERIC);
    expect(input).toHaveAttribute("autocomplete", "off");
    expect(input).toHaveAttribute("readonly");
    expect(input).toHaveAttribute("tabindex", "0");
    expect(input).toHaveAttribute("data-recording-ignore");
    expect(input).toHaveAttribute("id", "id");
    expect(input).toHaveAttribute("data-state", "ok");
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByTestId("prefix")).toBeInTheDocument();
    expect(screen.getByTestId("suffix")).toBeInTheDocument();
    await act(() => user.tab());
    expect(screen.getByTestId("help")).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });

  it("should trigger given event handlers", async () => {
    const onChange = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onSelect = jest.fn();
    const onMouseUp = jest.fn();
    const onMouseDown = jest.fn();
    const onKeyDown = jest.fn();
    const onKeyUp = jest.fn();
    render(
      <InputField
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSelect={onSelect}
        onMouseUp={onMouseUp}
        onMouseDown={onMouseDown}
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
      />,
    );
    const input = screen.getByRole("textbox");
    // This act can be removed after ORBIT-2464 is done
    await act(() => user.type(input, "Hello world!"));
    expect(onFocus).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalled();
    expect(onMouseDown).toHaveBeenCalled();
    expect(onMouseUp).toHaveBeenCalled();
    expect(onMouseUp).toHaveBeenCalled();
    expect(onKeyDown).toHaveBeenCalled();
    expect(onKeyUp).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalled();
    // This act can be removed after ORBIT-2464 is done
    await act(() => user.tab());
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have passed width", () => {
    const width = "100px";
    render(<InputField width={width} label="label" />);
    expect(document.querySelector("label")).toHaveStyle({ width });
  });

  describe("compact", () => {
    it("should render label", () => {
      render(<InputField label="Label" readOnly inlineLabel />);
      expect(screen.getByText("Label")).toBeInTheDocument();
    });
  });

  describe("required", () => {
    it("should render asterisk", () => {
      render(<InputField label="Label" readOnly required />);
      expect(screen.getByText(/\*/)).toBeInTheDocument();
    });
  });

  describe("number with error and help", () => {
    it("should have expected DOM output", async () => {
      render(
        <InputField
          type="number"
          minValue={1}
          maxValue={5}
          readOnly
          help={<div data-test="help">Everything is fine.</div>}
          error={<div data-test="error">Something went wrong.</div>}
        />,
      );
      const input = screen.getByRole("spinbutton");
      expect(input).toHaveAttribute("min", "1");
      expect(input).toHaveAttribute("max", "5");
      expect(input).toHaveAttribute("data-state", "error");

      await act(() => user.tab());
      expect(screen.queryByTestId("help")).not.toBeInTheDocument();
      expect(screen.getByTestId("error")).toBeInTheDocument();
    });
  });

  describe("error forms", () => {
    it("shold show the correct error tooltips while tabbing between fields", async () => {
      render(
        <>
          <InputField error="First" />
          <InputField error="Second" />
        </>,
      );

      expect(screen.queryByText("First")).not.toBeInTheDocument();
      await act(() => user.tab());
      expect(screen.getByText("First")).toBeVisible();
      await act(() => user.tab());
      expect(screen.queryByText("First")).not.toBeInTheDocument();
      expect(screen.getByText("Second")).toBeVisible();
    });

    it("should close tooltip when tabbing away from its content", async () => {
      render(<InputField error={<a href="/">Second</a>} />);

      await act(() => user.tab());
      expect(screen.getByText("Second")).toBeVisible();

      screen.getByRole("link").focus();
      expect(screen.getByRole("link")).toHaveFocus();

      await act(() => user.tab());
      expect(screen.queryByText("Second")).not.toBeInTheDocument();
    });
  });
});
