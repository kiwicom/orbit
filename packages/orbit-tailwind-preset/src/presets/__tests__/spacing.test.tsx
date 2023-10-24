import React from "react";
import { defaultFoundation, getTokens } from "@kiwicom/orbit-design-tokens";

import getCssVarsFoundation from "../foundation/getCssVarsFoundation";
import { render, screen } from "../../testUtils";
import Spacings from "../__fixtures__/Spacings";

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
    const tokens = getTokens(getCssVarsFoundation(defaultFoundation));
    render(<Spacings />);

    SPACINGS.forEach(spacing => {
      expect(screen.getByText(spacing)).toHaveStyle({
        paddingLeft: tokens[spacing],
      });
    });
  });
});
