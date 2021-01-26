// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Seat from "../index";
import { SIZE_OPTIONS, TYPES } from "../consts";

const height = {
  [SIZE_OPTIONS.EXTRASMALL]: "11px",
  [SIZE_OPTIONS.SMALL]: "36px",
  [SIZE_OPTIONS.MEDIUM]: "46px",
};

const width = {
  [SIZE_OPTIONS.EXTRASMALL]: "10px",
  [SIZE_OPTIONS.SMALL]: "34px",
  [SIZE_OPTIONS.MEDIUM]: "47px",
};

describe("Seat", () => {
  const dataTest = "test";
  it("should have expected DOM output", () => {
    render(
      <Seat
        type={TYPES.UNAVAILABLE}
        size={SIZE_OPTIONS.SMALL}
        title="kek"
        description="bur"
        dataTest={dataTest}
      />,
    );
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTitle("kek")).toBeInTheDocument();
    expect(screen.getByText("bur")).toBeInTheDocument();
  });

  it.each(Object.values(SIZE_OPTIONS))("it should have size %s", size => {
    render(<Seat size={size} dataTest="kek" />);
    expect(screen.getByTestId("kek")).toHaveStyle({ width: width[size], height: height[size] });
  });
});
