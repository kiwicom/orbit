import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import defaultTheme from "../../defaultTheme";
import StepperStateless from "../StepperStateless";

describe("Stepper", () => {
  it("should have expected DOM output", () => {
    const defaultValue = 2;
    const name = "name";
    const maxValue = 100;
    const minValue = 1;
    const dataTest = "test";
    const onIncrement = jest.fn();
    const onDecrement = jest.fn();
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const onKeyDown = jest.fn();
    const IncrementLabel = "Increment";
    const DecrementLabel = "Decrement";

    render(
      <StepperStateless
        value={defaultValue}
        name={name}
        maxValue={maxValue}
        minValue={minValue}
        dataTest={dataTest}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
        titleIncrement={IncrementLabel}
        titleDecrement={DecrementLabel}
      />,
    );

    const input = screen.getByRole("textbox");
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();

    fireEvent.keyDown(input, { keyCode: 40 });
    fireEvent.keyDown(input, { keyCode: 38 });
    expect(onKeyDown).toHaveBeenCalledTimes(2);

    userEvent.click(screen.getByLabelText(IncrementLabel));
    expect(onIncrement).toHaveBeenCalled();
    userEvent.click(screen.getByLabelText(DecrementLabel));
    expect(screen.getByLabelText("Decrement")).toHaveStyle({ background: "transparent" });
    expect(screen.getByLabelText("Increment")).toHaveStyle({ background: "transparent" });
    expect(onDecrement).toHaveBeenCalled();

    userEvent.tab();
    expect(onFocus).toHaveBeenCalled();
    userEvent.tab();
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have active state", () => {
    render(<StepperStateless value="kek" active />);

    expect(document.querySelector("svg")).toHaveStyle({
      background: defaultTheme.orbit.paletteBlueNormal,
    });
  });

  it("should have maxWidth", () => {
    render(<StepperStateless value="kek" dataTest="kek" maxWidth={200} />);

    expect(screen.getByTestId("kek")).toHaveStyle({ maxWidth: "200px" });
  });

  it("should have increment button disabled, if value is equal to maxValue", () => {
    render(<StepperStateless value={10} maxValue={10} titleIncrement="Increment" />);
    expect(screen.getByLabelText("Increment")).toBeDisabled();
  });

  it("should have decrement button disabled, if value is equal to minValue", () => {
    render(<StepperStateless value={0} minValue={0} titleDecrement="Decrement" />);
    expect(screen.getByLabelText("Decrement")).toBeDisabled();
  });

  it("should have disabled decrement button via prop", () => {
    render(<StepperStateless disabledDecrement value={5} titleDecrement="Decrement" />);
    expect(screen.getByLabelText("Decrement")).toBeDisabled();
  });

  it("should have disabled increment button via prop", () => {
    render(
      <StepperStateless disabledIncrement value={5} maxValue={10} titleIncrement="Increment" />,
    );
    expect(screen.getByLabelText("Increment")).toBeDisabled();
  });
});
