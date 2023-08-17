import * as React from "react";

import { render, screen } from "../../../test-utils";
import BadgePrimitive from "..";
import Sightseeing from "../../../icons/Sightseeing";

describe("BadgePrimitive", () => {
  it("should have expected DOM output", () => {
    render(
      <BadgePrimitive
        icon={<Sightseeing dataTest="icon" />}
        background="red"
        foregroundColor="blue"
        dataTest="test"
        ariaLabel="label"
      >
        badge
      </BadgePrimitive>,
    );

    expect(screen.getByTestId("test")).toHaveStyle({
      backgroundColor: "red",
      color: "blue",
    });
    expect(screen.getByLabelText("label")).toBeInTheDocument();
    expect(screen.getByText("badge")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
