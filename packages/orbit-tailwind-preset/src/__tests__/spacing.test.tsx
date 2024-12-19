import React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { render, screen } from "../testUtils";
import Spacings from "../__fixtures__/Spacings";

const SPACINGS = [
  "space50",
  "space100",
  "space150",
  "space200",
  "space300",
  "space400",
  "space500",
  "space600",
  "space700",
  "space800",
  "space1000",
  "space1200",
  "space1300",
  "space1600",
];

describe("Spacings", () => {
  it("should generate correct styles", () => {
    render(<Spacings />);

    SPACINGS.forEach(spacing => {
      expect(screen.getByText(spacing)).toHaveStyle({
        paddingLeft: defaultTokens[spacing],
      });
    });
  });
});
