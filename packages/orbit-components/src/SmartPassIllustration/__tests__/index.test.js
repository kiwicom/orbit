// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import SmartPassIllustration from "..";

describe("SmartPassIllustration", () => {
  it("should have expected DOM output", () => {
    const title = "SmartPass title";
    const description = "SmartPass description";
    const dataTest = "test";
    const ariaLabelledby = "aria-labeled";

    render(
      <SmartPassIllustration
        dataTest={dataTest}
        title={title}
        description={description}
        ariaLabelledby={ariaLabelledby}
        name="v1"
      />,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
    expect(screen.getByTitle(title)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("aria-labelledby", "aria-labeled");
  });
});
