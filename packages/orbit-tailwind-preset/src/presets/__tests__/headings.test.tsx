import React from "react";
import { defaultFoundation, getTokens } from "@kiwicom/orbit-design-tokens";

import Headings from "../__fixtures__/Headings";
import { render, screen } from "../../testUtils";
import { firstToUpper } from "../foundation/helpers";
import getCssVarsFoundation from "../foundation/getCssVarsFoundation";

const HEADINGS = [
  "title1",
  "title2",
  "title3",
  "title4",
  "title5",
  "title6",
  "displaySubtitle",
  "display",
];

describe("Headings", () => {
  it("should render all heading styles", () => {
    const tokens = getTokens(getCssVarsFoundation(defaultFoundation));
    render(<Headings />);
    HEADINGS.forEach(heading => {
      expect(screen.getByText(heading)).toHaveStyle({
        fontSize: tokens[`heading${firstToUpper(heading)}FontSize`],
        fontWeight: tokens[`heading${firstToUpper(heading)}FontWeight`],
        lineHeight: tokens[`heading${firstToUpper(heading)}LineHeight`],
      });
    });
  });
});
