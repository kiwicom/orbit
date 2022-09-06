import * as React from "react";
import { render, screen } from "@testing-library/react";

import FormLabel from "..";

describe("FormLabel", () => {
  it("should have expected DOM output", () => {
    render(
      <FormLabel filled={false} dataTest="test" required>
        FormLabel
      </FormLabel>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("should have error", () => {
    render(<FormLabel error>FormLabel</FormLabel>);
    expect(screen.getByLabelText("error")).toBeInTheDocument();
  });

  it("should have help", () => {
    render(<FormLabel help>FormLabel</FormLabel>);
    expect(screen.getByLabelText("help")).toBeInTheDocument();
  });
});
