import * as React from "react";

import { render, screen } from "../../test-utils";
import FormLabel from "..";

describe("FormLabel", () => {
  it("should have expected DOM output", () => {
    render(
      <FormLabel dataTest="test" required>
        FormLabel
      </FormLabel>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("should have error", () => {
    render(<FormLabel error>FormLabel</FormLabel>);
    expect(screen.getByTestId("ErrorIcon")).toBeInTheDocument();
  });

  it("should have help", () => {
    render(<FormLabel help>FormLabel</FormLabel>);
    expect(screen.getByTestId("HelpIcon")).toBeInTheDocument();
  });
});
