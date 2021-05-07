// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import BaggageStepper from "../Stepper";

describe("BaggageStepper", () => {
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
      <BaggageStepper
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
    expect(onDecrement).toHaveBeenCalled();

    // $FlowFixMe
    userEvent.tab(input);
    expect(onFocus).toHaveBeenCalled();
    fireEvent.blur(input);
    expect(onBlur).toHaveBeenCalled();
  });

  it("should have increment button disabled, if value is equal to maxValue", () => {
    render(<BaggageStepper value={10} maxValue={10} titleIncrement="Increment" />);
    expect(screen.getByLabelText("Increment")).toBeDisabled();
  });

  it("should have decrement button disabled, if value is equal to minValue", () => {
    render(<BaggageStepper value={0} minValue={0} titleDecrement="Decrement" />);
    expect(screen.getByLabelText("Decrement")).toBeDisabled();
  });

  it("should have disabled decrement button via prop", () => {
    render(<BaggageStepper disabledDecrement value={5} titleDecrement="Decrement" />);
    expect(screen.getByLabelText("Decrement")).toBeDisabled();
  });

  it("should have disabled increment button via prop", () => {
    render(<BaggageStepper disabledIncrement value={5} maxValue={10} titleIncrement="Increment" />);
    expect(screen.getByLabelText("Increment")).toBeDisabled();
  });
});
