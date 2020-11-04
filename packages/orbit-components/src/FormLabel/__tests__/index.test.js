// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import FormLabel from "../index";

describe("FormLabel", () => {
  it("should have expected DOM output", () => {
    render(
      <FormLabel filled={false} dataTest="test">
        FormLabel
      </FormLabel>,
    );
    expect(screen.getByTestId("test")).toBeInTheDocument();
  });
});
