import * as React from "react";
import { render } from "@testing-library/react";

import Mobile from "..";

describe("Mobile", () => {
  it("should be visible on smallMobile, largeMobile and tablet", () => {
    const { container } = render(<Mobile>kek</Mobile>);
    expect(container.firstChild).toMatchInlineSnapshot(`
      @media (min-width:414px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:576px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:768px) {
        .c0 {
          display: inline-block;
        }
      }

      @media (min-width:992px) {
        .c0 {
          display: none;
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
        kek
      </div>
    `);
  });
});
