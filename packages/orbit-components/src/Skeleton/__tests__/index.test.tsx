import * as React from "react";

import { render, screen } from "../../test-utils";
import Skeleton from "..";

describe("Skeleton", () => {
  it("it should expected DOM output", () => {
    const dataTest = "test";
    const children = "kek";

    render(
      <Skeleton dataTest={dataTest} title="title">
        <rect>{children}</rect>
      </Skeleton>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("should have custom width and height", () => {
    render(
      <Skeleton height="400px" width="300px" viewBox="0 0 300 400" dataTest="Loading">
        <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
        <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      </Skeleton>,
    );

    expect(screen.getByTestId("Loading")).toHaveStyle({ height: "400px", width: "300px" });
  });

  it("should have rows", () => {
    render(<Skeleton dataTest="test" rows={6} width="50%" />);
    expect(document.querySelector("clipPath")?.childElementCount).toBe(6);
    expect(screen.getByTestId("test")).toHaveStyle({ width: "50%" });
  });
});
