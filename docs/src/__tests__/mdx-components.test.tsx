import React from "react";
import { render, screen } from "@testing-library/react";

import * as Components from "../mdx-components";

describe("MDX components", () => {
  describe("<a>", () => {
    it("should adjust anchor element for external links", async () => {
      render(<Components.a href="https://github.com/kiwicom/orbit">monorepo</Components.a>);
      expect(screen.getByRole("link")).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
