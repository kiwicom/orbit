// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import KeyValue from "..";

describe("KeyValue", () => {
  it("should have expected DOM output", () => {
    const label = "key";
    const value = "value";
    const dataTest = "test";

    render(<KeyValue label={label} value={value} dataTest={dataTest} />);

    expect(screen.getByText(value)).toBeInTheDocument();
    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
});
