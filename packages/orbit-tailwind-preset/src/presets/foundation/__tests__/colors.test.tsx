import React from "react";
import { convertHexToRgba, defaultFoundation } from "@kiwicom/orbit-design-tokens";

import { render, screen } from "../../../testUtils";
import Colors from "../../__fixtures__/Colors";
import getTailwindFoundation from "../getTailwindFoundation";
import { camelCase } from "../../utils";

describe("colors", () => {
  it("should generate correct styles", () => {
    render(<Colors />);

    Object.entries(getTailwindFoundation(defaultFoundation).palette).forEach(([cat, values]) => {
      if (cat === "transparent") return;
      Object.keys(values).forEach(color => {
        const el = screen.getByText(`${cat}-${color}`);
        expect(el).toHaveStyle({
          color: convertHexToRgba(defaultFoundation.palette[cat][camelCase(color)], 0).replace(
            "rgba",
            "rgb",
          ),
        });
      });
    });
  });
});
