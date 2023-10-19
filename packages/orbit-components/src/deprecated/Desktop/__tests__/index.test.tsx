import * as React from "react";

import { render, screen } from "../../../test-utils";
import Desktop from "..";

describe("Desktop", () => {
  it("should output expected styles", () => {
    render(<Desktop>kek</Desktop>);
    expect(screen.getByText("kek")).toMatchInlineSnapshot(`
      <div
        class="inline-block sm-mm:hidden mm-lm:hidden lm-tb:hidden tb-de:hidden"
      >
        kek
      </div>
    `);
  });
});
