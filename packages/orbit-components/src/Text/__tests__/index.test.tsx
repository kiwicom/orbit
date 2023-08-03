import * as React from "react";

import { screen, render } from "../../test-utils";
import theme from "../../defaultTheme";
import { TEXT_ALIGN } from "../../common/tailwind/textAlign";
import type { Props } from "../types";
import type { SIZE_OPTIONS, WEIGHT_OPTIONS } from "../consts";
import Text from "..";

const SIZE_STYLES: { [K in SIZE_OPTIONS]: Record<"font-size" | "line-height", string> } = {
  small: {
    "font-size": theme.orbit.fontSizeTextSmall,
    "line-height": theme.orbit.lineHeightTextSmall,
  },
  normal: {
    "font-size": theme.orbit.fontSizeTextNormal,
    "line-height": theme.orbit.lineHeightTextNormal,
  },
  large: {
    "font-size": theme.orbit.fontSizeTextLarge,
    "line-height": theme.orbit.lineHeightTextLarge,
  },
  extraLarge: {
    "font-size": theme.orbit.fontSizeTextExtraLarge,
    "line-height": theme.orbit.lineHeightTextExtraLarge,
  },
};

const WEIGHT_STYLES: { [K in WEIGHT_OPTIONS]: Record<"font-weight", string> } = {
  normal: {
    "font-weight": theme.orbit.fontWeightNormal,
  },
  bold: {
    "font-weight": theme.orbit.fontWeightBold,
  },
  medium: {
    "font-weight": theme.orbit.fontWeightMedium,
  },
};

describe("Text", () => {
  const dataTest = "test";
  const text = "Children text";
  const id = "id";

  it("should have expected DOM output", () => {
    render(
      <Text dataTest={dataTest} id={id}>
        {text}
      </Text>,
    );

    const textElement = screen.getByTestId(dataTest);

    expect(textElement.tagName).toBe("P");
    expect(textElement).toHaveAttribute("id", id);
    expect(textElement).toBeInTheDocument();
    expect(screen.getByText(text)).toBeInTheDocument();
    expect(textElement).toHaveStyle({
      margin: 0,
      "font-family": theme.orbit.fontFamily,
      "font-size": theme.orbit.fontSizeTextNormal,
      "line-height": theme.orbit.lineHeightTextNormal,
      "text-align": "left",
    });
  });

  it.each(Object.keys(SIZE_STYLES))("should have size %s", size => {
    render(
      <Text dataTest={dataTest} size={size as Props["size"]}>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle(SIZE_STYLES[size]);
  });

  it.each(Object.keys(WEIGHT_STYLES))("should have weight %s", weight => {
    render(
      <Text dataTest={dataTest} weight={weight as Props["weight"]}>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle(WEIGHT_STYLES[weight]);
  });

  it.each(Object.values(TEXT_ALIGN))("should have align %s", align => {
    render(
      <Text dataTest={dataTest} align={align as Props["align"]}>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "text-align": align,
    });
  });

  it("should render according to the passed `as` prop", () => {
    render(
      <Text dataTest={dataTest} as="div">
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest).tagName).toBe("DIV");
  });

  it("should render uppercase", () => {
    render(
      <Text dataTest={dataTest} uppercase>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "text-transform": "uppercase",
    });
  });

  it("should render italic", () => {
    render(
      <Text dataTest={dataTest} italic>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "font-style": "italic",
    });
  });

  it("should render strikethrough", () => {
    render(
      <Text dataTest={dataTest} strikeThrough>
        {text}
      </Text>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "text-decoration-line": "line-through",
    });
  });
});
