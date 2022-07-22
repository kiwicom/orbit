import * as React from "react";
import { render, screen } from "@testing-library/react";

import Translate from "..";

describe("Translate", () => {
  it("should return translation", () => {
    render(
      <Translate
        tKey="wizard_progress"
        values={{
          number: 5,
          total: 10,
        }}
      />,
    );

    expect(screen.getByText("5 of 10")).toBeInTheDocument();
  });

  it("should fall back to default dictionary", () => {
    render(<Translate tKey="loading" />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
