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

  it("should have rows", () => {
    render(<Skeleton dataTest="test" rows={6} />);
    expect(document.querySelectorAll("clipPath > *")).toHaveLength(6);
  });
});
