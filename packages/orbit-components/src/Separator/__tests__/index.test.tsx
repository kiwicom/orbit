import * as React from "react";

import { render, screen } from "../../test-utils";
import Separator from "..";

describe("Separator", () => {
  it("should have expected DOM output", () => {
    render(<Separator />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });
});
