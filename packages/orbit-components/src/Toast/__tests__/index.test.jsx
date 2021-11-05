// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import { Airplane } from "../../icons";
import Toast from "..";

describe("Toast", () => {
  it("should have expected DOM output", () => {
    const dataTest = "test";

    render(
      <Toast dataTest={dataTest} iconLeft={<Airplane dataTest="airplane" />}>
        kek
      </Toast>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
    expect(screen.getByTestId("airplane")).toBeInTheDocument();
    expect(screen.getByText("kek")).toBeInTheDocument();
  });
});
