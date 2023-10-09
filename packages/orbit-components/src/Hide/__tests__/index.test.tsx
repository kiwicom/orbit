import * as React from "react";

import { render } from "../../test-utils";
import Hide from "..";

describe("Hide", () => {
  it("should have expected DOM output", () => {
    const { container } = render(
      <Hide on={["smallMobile", "largeMobile", "largeDesktop"]} block={false}>
        content
      </Hide>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="inline-block sm-mm:hidden lm-tb:hidden ld:hidden"
      >
        content
      </div>
    `);
  });
});
