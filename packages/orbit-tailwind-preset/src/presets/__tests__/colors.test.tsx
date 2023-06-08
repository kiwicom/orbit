import React from "react";
import { convertHexToRgba } from "@kiwicom/orbit-design-tokens";

import defaultFoundation from "../foundation/theme/defaultFoundation";
import { render, screen } from "../../testUtils";
import Colors from "../__fixtures__/Colors";

describe("colors", () => {
  it("should generate correct styles", () => {
    render(<Colors />);

    Object.entries(defaultFoundation.palette).forEach(([cat, values]) => {
      Object.keys(values).forEach(color => {
        const el = screen.getByText(`${cat}-${color}`);
        expect(el).toHaveStyle({
          color: convertHexToRgba(defaultFoundation.palette[cat][color], 0).replace("rgba", "rgb"),
        });
      });
    });
  });
});
