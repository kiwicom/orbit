import React from "react";
import { defaultFoundation, getTokens } from "@kiwicom/orbit-design-tokens";

import { render, screen } from "../../testUtils";
import FontSizes from "../__fixtures__/FontSizes";
import FontWeight from "../__fixtures__/FontWeight";
import LineHeight from "../__fixtures__/LineHeight";
import getCssVarsFoundation from "../foundation/getCssVarsFoundation";

describe("font sizes", () => {
  it("should generate correct styles", () => {
    render(<FontSizes />);
    const tokens = getTokens(getCssVarsFoundation(defaultFoundation));

    expect(screen.getByText("Text small")).toHaveStyle({
      fontSize: tokens.fontSizeTextSmall,
    });

    expect(screen.getByText("Text normal")).toHaveStyle({
      fontSize: tokens.fontSizeTextNormal,
    });

    expect(screen.getByText("Text large")).toHaveStyle({
      fontSize: tokens.fontSizeTextLarge,
    });
  });
});

describe("font weights", () => {
  it("should generate correct styles", () => {
    const tokens = getTokens(getCssVarsFoundation(defaultFoundation));

    render(<FontWeight />);

    expect(screen.getByText("bold")).toHaveStyle({
      fontWeight: tokens.fontWeightBold,
    });

    expect(screen.getByText("normal")).toHaveStyle({
      fontWeight: tokens.fontWeightNormal,
    });

    expect(screen.getByText("medium")).toHaveStyle({
      fontWeight: tokens.fontWeightMedium,
    });
  });
});

describe("line heights", () => {
  it("should generate correct styles", () => {
    const tokens = getTokens(getCssVarsFoundation(defaultFoundation));

    render(<LineHeight />);

    expect(screen.getByText("leading-small")).toHaveStyle({
      lineHeight: tokens.lineHeightSmall,
    });

    expect(screen.getByText("leading-normal")).toHaveStyle({
      lineHeight: tokens.lineHeightNormal,
    });

    expect(screen.getByText("leading-large")).toHaveStyle({
      lineHeight: tokens.lineHeightLarge,
    });
  });
});
