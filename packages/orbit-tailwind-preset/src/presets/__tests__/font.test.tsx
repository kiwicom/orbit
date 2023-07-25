import React from "react";
import { defaultTokens } from "@kiwicom/orbit-design-tokens";

import { render, screen } from "../../testUtils";
import FontSizes from "../__fixtures__/FontSizes";
import FontWeight from "../__fixtures__/FontWeight";
import LineHeight from "../__fixtures__/LineHeight";

describe("font sizes", () => {
  it("should generate correct styles", () => {
    render(<FontSizes />);

    expect(screen.getByText("Text small")).toHaveStyle({
      fontSize: defaultTokens.fontSizeTextSmall,
    });

    expect(screen.getByText("Text normal")).toHaveStyle({
      fontSize: defaultTokens.fontSizeTextNormal,
    });

    expect(screen.getByText("Text large")).toHaveStyle({
      fontSize: defaultTokens.fontSizeTextLarge,
    });
  });
});

describe("font weights", () => {
  it("should generate correct styles", () => {
    render(<FontWeight />);

    expect(screen.getByText("bold")).toHaveStyle({
      fontWeight: defaultTokens.fontWeightBold,
    });

    expect(screen.getByText("normal")).toHaveStyle({
      fontWeight: defaultTokens.fontWeightNormal,
    });

    expect(screen.getByText("medium")).toHaveStyle({
      fontWeight: defaultTokens.fontWeightMedium,
    });
  });
});

describe("line heights", () => {
  it("should generate correct styles", () => {
    render(<LineHeight />);

    expect(screen.getByText("leading-small")).toHaveStyle({
      lineHeight: defaultTokens.lineHeightTextSmall,
    });

    expect(screen.getByText("leading-normal")).toHaveStyle({
      lineHeight: defaultTokens.lineHeightTextNormal,
    });

    expect(screen.getByText("leading-large")).toHaveStyle({
      lineHeight: defaultTokens.lineHeightTextLarge,
    });
  });
});
