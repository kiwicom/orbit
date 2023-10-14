import React from "react";
import { getTokens } from "@kiwicom/orbit-design-tokens";

import cssVariablesFoundation from "../foundation/cssVarsFoundation";
import getTailwindTheme from "../foundation/getTailwindTheme";
import { render, screen } from "../../testUtils";
import Colors from "../__fixtures__/Colors";

describe("colors", () => {
  it("should generate correct styles", () => {
    const theme = getTailwindTheme(getTokens(cssVariablesFoundation));
    render(<Colors />);

    Object.entries(theme.colors).forEach(([cat, values]) => {
      if (cat === "transparent") return;

      Object.keys(values).forEach(color => {
        const el = screen.getByText(`${cat}-${color}`);
        expect(el).toHaveStyle({
          color: theme.colors[cat][color],
        });
      });
    });
  });
});
