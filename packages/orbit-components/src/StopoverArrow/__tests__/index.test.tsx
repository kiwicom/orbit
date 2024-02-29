import * as React from "react";

import { screen, render } from "../../test-utils";
import StopoverArrow from "..";
import STOPS from "../consts";

describe("StopoverArrow", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";
    const id = "ID";
    const stops = STOPS.THREE;
    render(<StopoverArrow dataTest={dataTest} stops={stops} id={id} />);
    expect(screen.getByTitle(`Stopover arrow, ${stops} stops`)).toBeInTheDocument();
    const el = screen.getByTestId(dataTest);
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("id", id);
  });
});
