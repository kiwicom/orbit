// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import TripSector, { TripDate, TripLayover } from "..";

describe("TripSector", () => {
  it("should have expected DOM output", () => {
    render(
      <TripSector dataTest="sector">
        <TripDate dataTest="date" duration="duration">
          date
        </TripDate>
        <TripLayover dataTest="layover">layover</TripLayover>
      </TripSector>,
    );
    screen.getByTestId("sector");
    expect(screen.getByTestId("date")).toHaveTextContent("date");
    expect(screen.getByTestId("date")).toHaveTextContent("duration");
    expect(screen.getByTestId("layover")).toHaveTextContent("layover");
  });
});
