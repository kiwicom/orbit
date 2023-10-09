import * as React from "react";

import { render } from "../../../test-utils";
import Desktop from "..";

describe("Desktop", () => {
  it("should output expected styles", () => {
    const { container } = render(<Desktop>kek</Desktop>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="inline-block sm-mm:hidden mm-lm:hidden lm-tb:hidden tb-de:hidden"
      >
        kek
      </div>
    `);
  });
});
