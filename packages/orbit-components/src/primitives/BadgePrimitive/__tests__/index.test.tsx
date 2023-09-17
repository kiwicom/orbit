import * as React from "react";

import { render, screen } from "../../../test-utils";
import BadgePrimitive from "..";
import Sightseeing from "../../../icons/Sightseeing";

describe("BadgePrimitive", () => {
  it("should have expected DOM output", () => {
    render(
      <BadgePrimitive
        className="orbit-kek"
        icon={<Sightseeing dataTest="icon" />}
        dataTest="test"
        ariaLabel="label"
      >
        badge
      </BadgePrimitive>,
    );

    expect(screen.getByLabelText("label")).toHaveClass("orbit-kek");
    expect(screen.getByText("badge")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
