import React from "react";
import { getTokens } from "@kiwicom/orbit-design-tokens";

import Button from "../__fixtures__/Button";
import { render, screen } from "../testUtils";
import firstToUpper from "../utils/firstToUpper";
import cssVarsFoundation from "../foundation/cssVarsFoundation";

const testIds = ["primary", "secondary", "info", "success", "warning", "critical"];

describe("Button", () => {
  const tokens = getTokens(cssVarsFoundation);

  it.each(testIds)("should have correct styles for %s", testId => {
    render(<Button />);

    const button = screen.getByText(testId);
    expect(button).toHaveStyle({
      backgroundColor: tokens[`button${firstToUpper(testId)}Background`],
    });
  });
});
