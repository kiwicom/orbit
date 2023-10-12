import React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { render, screen } from "../../../testUtils";
import Spacings from "../../__fixtures__/Spacings";

const SPACINGS = [
  "spaceXXXSmall",
  "spaceXXSmall",
  "spaceXSmall",
  "spaceSmall",
  "spaceMedium",
  "spaceLarge",
  "spaceXLarge",
  "spaceXXLarge",
  "spaceXXXLarge",
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
