// @flow
import React from "react";
import { render, screen } from "@testing-library/react";

import HorizontalScroll from "..";

describe("HorizontalScroll", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";

    render(
      <HorizontalScroll dataTest={dataTest}>
        {Array(...Array(10)).map((_, key) => (
          // eslint-disable-next-line
          <div key={key} style={{ height: "50px" }}>
            {key}
          </div>
        ))}
      </HorizontalScroll>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
});
