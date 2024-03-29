import React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import CheckBox from "..";

describe("CheckBox", () => {
  const user = userEvent.setup();

  it("default", async () => {
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
    await user.click(checkbox);
    expect(onChange).toHaveBeenCalled();
  });
});
