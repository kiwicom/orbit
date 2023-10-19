import * as React from "react";

import { render, screen } from "../../../test-utils";
import Mobile from "..";

describe("Mobile", () => {
  it("should be visible on smallMobile, largeMobile and tablet", () => {
    render(<Mobile>kek</Mobile>);
    expect(screen.getByText("kek")).toMatchInlineSnapshot(`
      <div
        class="inline-block de-ld:hidden ld:hidden"
      >
        kek
      </div>
    `);
  });
});
