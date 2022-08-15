import * as React from "react";
import { render, screen } from "@testing-library/react";

import Translate from "..";

describe("Translate", () => {
  it("should return translation", () => {
    jest.doMock("../../hooks/useDictionary", () => () => ({
      wizard_progress: "Custom __number__ of __total__",
    }));

    render(
      <Translate
        tKey="wizard_progress"
        values={{
          number: 5,
          total: 10,
        }}
      />,
    );

    expect(screen.getByText("Custom 5 of 10")).toBeInTheDocument();
  });

  it("should fall back to default dictionary", () => {
    render(<Translate tKey="loading" />);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });
});
