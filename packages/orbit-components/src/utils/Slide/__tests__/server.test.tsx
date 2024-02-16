/**
 * @jest-environment node
 */
import * as React from "react";
import { renderToStaticMarkup } from "react-dom/server";

import Slide from "..";

describe("slide util", () => {
  describe("server-side", () => {
    it("should be expanded", () => {
      const markup = renderToStaticMarkup(
        <Slide maxHeight={20} expanded>
          Expanded content
        </Slide>,
      );
      expect(markup).toContain("max-height:20px");
    });
  });
});
