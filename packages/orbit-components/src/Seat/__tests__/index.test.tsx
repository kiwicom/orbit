import * as React from "react";
import userEvent from "@testing-library/user-event";

import { render, screen } from "../../test-utils";
import Seat from "..";
import { SIZE_OPTIONS, TYPES } from "../consts";

describe("Seat", () => {
  const user = userEvent.setup();

  const dataTest = "test";
  const onClick = jest.fn();
  it("should have expected DOM output", async () => {
    render(
      <Seat
        type={TYPES.DEFAULT}
        size={SIZE_OPTIONS.SMALL}
        title="kek"
        onClick={onClick}
        description="bur"
        dataTest={dataTest}
        id="ID"
      />,
    );

    await user.click(screen.getByTestId(dataTest));
    expect(onClick).toHaveBeenCalled();
    const el = screen.getByTestId(dataTest);
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("id", "ID");
    expect(screen.getByTitle("kek")).toBeInTheDocument();
    expect(screen.getByText("bur")).toBeInTheDocument();
  });
});
