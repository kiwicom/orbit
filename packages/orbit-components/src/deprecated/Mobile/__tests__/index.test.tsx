import * as React from "react";

import { render } from "../../../test-utils";
import Mobile from "..";

describe("Mobile", () => {
  it("should be visible on smallMobile, largeMobile and tablet", () => {
    const { container } = render(<Mobile>kek</Mobile>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="inline-block de-ld:hidden ld:hidden"
      >
        kek
      </div>
    `);
  });
});
