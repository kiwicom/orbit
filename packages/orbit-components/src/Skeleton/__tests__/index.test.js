// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Skeleton from "..";

describe("Skeleton", () => {
  it("it should expected DOM output", () => {
    const dataTest = "test";
    const children = "kek";
    const ariaLabelledby = "bur";

    render(
      <Skeleton dataTest={dataTest} title="Loading" ariaLabelledby={ariaLabelledby}>
        <rect>{children}</rect>
      </Skeleton>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("aria-labelledby", ariaLabelledby);
    expect(screen.getByText("Loading")).toBeInTheDocument();
  });

  it("should have custom width and height", () => {
    render(
      <Skeleton height="400px" width="300px" viewBox="0 0 300 400">
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      </Skeleton>,
    );

    expect(screen.getByRole("img")).toHaveStyle({ height: "400px", width: "300px" });
  });

  it("should have rows", () => {
    render(<Skeleton dataTest="test" rows={6} />);
    expect(document.querySelectorAll("clipPath > *")).toHaveLength(6);
  });
});
