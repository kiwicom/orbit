import React from "react";
import { defaultFoundation, getTokens } from "@kiwicom/orbit-design-tokens";

import Button from "../__fixtures__/Button";
import { render, screen } from "../../testUtils";
import { firstToUpper } from "../foundation/helpers";
import getCssVarsFoundation from "../foundation/getCssVarsFoundation";

const testIds = ["primary", "secondary", "info", "success", "warning", "critical"];

describe("Button", () => {
  const tokens = getTokens(getCssVarsFoundation(defaultFoundation));

  it.each(testIds)("should have correct styles for %s", testId => {
    render(<Button />);

    const button = screen.getByText(testId);
    expect(button).toHaveStyle({
      backgroundColor: tokens[`button${firstToUpper(testId)}Background`],
    });
  });
});
