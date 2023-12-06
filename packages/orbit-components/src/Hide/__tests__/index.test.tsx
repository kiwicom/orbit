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
    expect(container.childNodes[1]).toMatchInlineSnapshot(`
      <div
        class="inline-block max-mm:hidden lm:max-tb:hidden ld:hidden"
      >
        content
      </div>
    `);
  });
});
