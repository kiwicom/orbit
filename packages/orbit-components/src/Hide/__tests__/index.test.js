// @flow
import * as React from "react";
import { render } from "@testing-library/react";

import Hide from "..";

describe("Hide", () => {
  it("should have expected DOM output", () => {
    const { container } = render(
      <Hide on={["smallMobile", "largeMobile", "largeDesktop"]} block={false}>
        content
      </Hide>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: none;
      }

      @media (min-width:414px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:576px) {
        .c0 {
          display: none;
        }
      }

      @media (min-width:768px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:992px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:1200px) {
        .c0 {
          display: none;
        }
      }

      <div
        class="c0"
      >
        content
      </div>
    `);
  });
});
