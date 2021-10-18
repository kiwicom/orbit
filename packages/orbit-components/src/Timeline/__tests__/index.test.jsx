// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import defaultTheme from "../../defaultTheme";
import Timeline from "..";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("#Timeline", () => {
  it("should have spaceAfter", () => {
    const { container } = render(<Timeline spaceAfter={SPACINGS_AFTER.NORMAL}>kek</Timeline>);
    // $FlowFixMe
    expect(getComputedStyle(container.firstChild)).toHaveProperty(
      "margin-bottom",
      defaultTheme.orbit.spaceSmall,
    );
  });

  it("should have data-test", () => {
    const dataTest = "data-test";

    render(
      <Timeline spaceAfter={SPACINGS_AFTER.NORMAL} dataTest={dataTest}>
        kek
      </Timeline>,
    );

    expect(screen.getByTestId(dataTest)).toBeInTheDocument();
  });
});
