import * as React from "react";
import { render } from "@testing-library/react";

import Desktop from "..";

describe("Desktop", () => {
  it("should output expected styles", () => {
    const { container } = render(<Desktop>kek</Desktop>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        display: none;
      }

      @media (min-width:414px) {
        .c0 {
          display: none;
        }
      }

      @media (min-width:576px) {
        .c0 {
          display: none;
        }
      }

      @media (min-width:768px) {
        .c0 {
          display: none;
        }
      }

      @media (min-width:992px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:1200px) {
        .c0 {
          display: inline-block;
        }
      }

      <div
        class="c0"
      >
        kek
      </div>
    `);
  });
});
