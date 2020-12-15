// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import IllustrationPrimitive from "../index";
import { SIZE_OPTIONS } from "../consts";
import SPACINGS_AFTER from "../../../common/getSpacingToken/consts";
import defaultTheme from "../../../defaultTheme";

const URL = "//images.kiwi.com/illustrations/0x90/Accommodation-Q85.png";
const URL_RETINA = "//images.kiwi.com/illustrations/0x180/Accommodation-Q85.png 2x";

describe("IllustrationPrimitive", () => {
  it("should have expected DOM output", () => {
    render(
      <IllustrationPrimitive
        size={SIZE_OPTIONS.EXTRASMALL}
        name="Accommodation"
        alt="Alternative text"
        dataTest="test"
        spaceAfter={SPACINGS_AFTER.NORMAL}
      />,
    );

    const img = screen.getByRole("img");

expect(img).toHaveStyle({ maxHeight: "90px" });
    expect(screen.getByAltText("Alternative text")).toBeInTheDocument();
    expect(screen.getByTestId("test")).toBeInTheDocument();
    expect(img).toHaveAttribute("src", URL);
    expect(img).toHaveAttribute("srcset", expect.stringContaining(URL_RETINA));
    expect(img).toHaveStyle({ marginBottom: defaultTheme.orbit.spaceSmall });
  });
});
