import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import CheckBox from "..";

describe("CheckBox", () => {
  const user = userEvent.setup();

  it("can be controlled", async () => {
    const onChange = jest.fn();
    render(
      <CheckBox
        label="Checkbox"
        onChange={onChange}
        value="option"
        dataTest="test"
        name="name"
        tabIndex="-1"
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" });
    expect(checkbox).toHaveAttribute("value", "option");
    expect(checkbox).toHaveAttribute("name", "name");
    expect(checkbox).toHaveAttribute("tabIndex", "-1");
    expect(checkbox).not.toHaveAttribute("checked");
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });

  it("can be uncontrolled", async () => {
    const onChange = jest.fn();
    render(
      <CheckBox
        label="Checkbox"
        onChange={onChange}
        value="option"
        dataTest="test"
        name="name"
        defaultChecked
      />,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    const checkbox = screen.getByRole("checkbox", { name: "Checkbox" }) as HTMLInputElement;
    expect(checkbox.checked).toBeTruthy();
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalled();
    expect(checkbox.checked).toBeFalsy();
  });
});
