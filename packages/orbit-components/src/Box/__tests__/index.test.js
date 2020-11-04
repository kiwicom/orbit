// @flow
import React from "react";
import { screen, render } from "@testing-library/react";
import convertHexToRgba from "@kiwicom/orbit-design-tokens/lib/convertHexToRgba";

import theme from "../../defaultTheme";
import { TOKENS } from "../consts";
import Box from "..";
import { normalizeFlex } from "../normalize";

const dataTest = "test";

const DIRECTIONS = {
  ROW: "row",
  COLUMN: "column",
  "ROW-REVERSE": "row-reverse",
  "COLUMN-REVERSE": "column-reverse",
};

const ALIGN = { START: "start", END: "end", CENTER: "center", STRETCH: "stretch" };

const POSITIONS = { ABSOLUTE: "absolute", RELATIVE: "relative", FIXED: "fixed" };

const JUSTIFY = {
  CENTER: "center",
  START: "start",
  END: "end",
  BETWEEN: "between",
  AROUND: "around",
};

const TEXT_ALIGN = { LEFT: "left", RIGHT: "right", CENTER: "center" };

const ELEVATION = { ACTION: "action", FIXED: "fixed", RAISED: "raised", OVERLAY: "overlay" };

describe("#Box", () => {
  it("should have basic props", () => {
    render(
      <Box
        dataTest={dataTest}
        color="blueDark"
        padding="medium"
        margin="medium"
        maxWidth="300px"
        maxHeight="100px"
        display="block"
        background="cloudLight"
      >
        kek
      </Box>,
    );

    const el = screen.getByTestId(dataTest);
    const getOmittedHex = hex =>
      convertHexToRgba(hex, NaN).replace(", NaN", "").replace("rgba", "rgb");

    expect(el).toBeInTheDocument();
    expect(el).toHaveStyle({ color: getOmittedHex(theme.orbit.paletteBlueDark) });
    expect(el).toHaveStyle({ background: getOmittedHex(theme.orbit.paletteCloudLight) });
    expect(el).toHaveStyle({ padding: TOKENS(theme).medium });
    expect(el).toHaveStyle({ margin: TOKENS(theme).medium });
    expect(el).toHaveStyle({ display: "block" });
    expect(el).toHaveStyle({ "max-width": "300px" });
    expect(el).toHaveStyle({ "max-height": "100px" });
  });

  it("should have display flex", () => {
    render(
      <Box dataTest={dataTest} display="flex" wrap="wrap" direction="row" grow={0} shrink={0}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ display: "flex" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-direction": "row" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-shrink": "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-grow": "0" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-wrap": "wrap" });
  });

  it.each(Object.values(DIRECTIONS))("should have directions", direction => {
    render(
      <Box dataTest={`${dataTest}-${direction}`} display="flex" direction={direction}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${direction}`)).toHaveStyle({
      "flex-direction": direction,
    });
  });

  it.each(Object.values(POSITIONS))("should have positions", position => {
    render(
      <Box dataTest={`${dataTest}-${position}`} position={position}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${position}`)).toHaveStyle({ position });
  });

  it.each(Object.keys(JUSTIFY))("should have justify-content", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} display="flex" justify={JUSTIFY[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      "justify-content": normalizeFlex("justify", JUSTIFY[key]),
    });
  });

  it.each(Object.keys(ALIGN))("should have align-items", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} display="flex" align={ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      "align-items": normalizeFlex("align", ALIGN[key]),
    });
  });

  it.each(Object.keys(TEXT_ALIGN))("should have textAlign", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} textAlign={TEXT_ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      "text-align": TEXT_ALIGN[key],
    });
  });

  it("should have left, right, top, bottom", () => {
    render(
      <Box dataTest={dataTest} top="10px" left="5px" right="0" bottom="0">
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ top: "10px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ bottom: "0px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ left: "5px" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({ right: "0px" });
  });

  it("should have elevation", () => {
    const test = Object.keys(ELEVATION).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} display="flex" elevation={ELEVATION[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    const trimSpaces = val => val.replace(/, /g, ",");

    expect(testEl(0)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowAction) });
    expect(testEl(1)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowFixed) });
    expect(testEl(2)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowRaised) });
    expect(testEl(3)).toHaveStyle({ "box-shadow": trimSpaces(theme.orbit.boxShadowOverlay) });
  });
});
