import * as React from "react";

import { render, screen } from "../../../test-utils";
import Desktop from "..";

describe("Desktop", () => {
  it("should output expected styles", () => {
    render(<Desktop>kek</Desktop>);
    expect(screen.getByText("kek")).toMatchInlineSnapshot(`
      <div
        class="inline-block max-mm:hidden mm:max-lm:hidden lm:max-tb:hidden tb:max-de:hidden"
      >
        kek
      </div>
    `);
  });
});
