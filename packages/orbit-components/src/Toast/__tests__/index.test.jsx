// @flow
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { Airplane } from "../../icons";
import Toast from "../Toast";

describe("Toast", () => {
  it("should have expected DOM output", () => {
    const onMouseEnter = jest.fn();
    const onMouseLeave = jest.fn();

    render(
      <Toast
        icon={<Airplane dataTest="airplane" />}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ariaLive="polite"
        role="status"
        onDismiss={() => {}}
        placement="bottom-center"
      >
        kek
      </Toast>,
    );

    const toast = screen.getByText("kek");

    fireEvent.mouseOver(toast);
    expect(onMouseEnter).toHaveBeenCalled();

    fireEvent.mouseLeave(toast);
    expect(onMouseLeave).toHaveBeenCalled();

    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByRole("status")).toHaveAttribute("aria-live", "polite");
    expect(screen.getByRole("status")).toHaveStyle({ bottom: 0, justifyContent: "center" });
  });
});
