import * as React from "react";

import { screen, render } from "../../test-utils";
import { getJustify, getAlign } from "../../utils/layout";
import theme from "../../defaultTheme";
import type { Props } from "../types";
import { TOKENS } from "../../utils/layout/consts";
import { ALIGN } from "../../common/tailwind/alignItems";
import { DISPLAY } from "../../common/tailwind/display";
import { JUSTIFY } from "../../common/tailwind/justify";
import { DIRECTION as FLEX_DIRECTIONS } from "../../common/tailwind/direction";
import { TEXT_ALIGN } from "../../common/tailwind/textAlign";
import type { BORDER_RADIUS as BORDER_RADIUS_KEYS } from "../helpers/tailwindClasses";
import { POSITION as POSITIONS, SHADOWS as ELEVATION, OVERFLOW } from "../helpers/tailwindClasses";
import Box from "..";

const dataTest = "test";

const BORDER_RADIUS: { [K in BORDER_RADIUS_KEYS]: string } = {
  small: theme.orbit.borderRadiusSmall,
  normal: theme.orbit.borderRadiusNormal,
  large: theme.orbit.borderRadiusLarge,
  circle: theme.orbit.borderRadiusCircle,
};

describe("#Box", () => {
  it("should have basic props", () => {
    render(
      <Box
        dataTest={dataTest}
        padding="medium"
        margin="medium"
        width="100%"
        minWidth="100px"
        maxWidth="300px"
        height="100%"
        maxHeight="100px"
      >
        kek
      </Box>,
    );

    const el = screen.getByTestId(dataTest);

    expect(el).toBeInTheDocument();
    expect(el.tagName).toBe("DIV");
    expect(el).toHaveStyle({ "box-sizing": "border-box" });
    expect(el).toHaveStyle({ "font-family": theme.orbit.fontFamily });
    expect(el).toHaveStyle({ padding: TOKENS(theme).medium });
    expect(el).toHaveStyle({ margin: TOKENS(theme).medium });
    expect(el).toHaveStyle({ "--box-width": "100%", width: "var(--box-width)" });
    expect(el).toHaveStyle({ "--box-min-width": "100px", "min-width": "var(--box-min-width)" });
    expect(el).toHaveStyle({ "--box-max-width": "300px", "max-width": "var(--box-max-width)" });
    expect(el).toHaveStyle({ "--box-height": "100%", height: "var(--box-height)" });
    expect(el).toHaveStyle({ "--box-max-height": "100px", "max-height": "var(--box-max-height)" });
  });

  it("should render according to the passed as prop 'as'", () => {
    render(
      <Box dataTest={dataTest} as="span">
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest).tagName).toBe("SPAN");
  });

  it("should have display flex properties", () => {
    render(
      <Box dataTest={dataTest} wrap="nowrap" grow={0} shrink={0}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({ "flex-wrap": "nowrap" });
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-shrink": "0",
      "flex-shrink": "var(--box-shrink)",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-grow": "0",
      "flex-grow": "var(--box-grow)",
    });
  });

  it.each(Object.values(FLEX_DIRECTIONS))("should have directions", direction => {
    render(
      <Box dataTest={`${dataTest}-${direction}`} direction={direction}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${direction}`)).toHaveStyle({
      flexDirection: direction,
    });
  });

  it.each(Object.values(DISPLAY))("should have display", display => {
    render(
      <Box dataTest={`${dataTest}-${display}`} display={display}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${display}`)).toHaveStyle({
      display,
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
      <Box dataTest={`${dataTest}-${key}`} justify={JUSTIFY[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      justifyContent: getJustify(JUSTIFY[key]),
    });
  });

  it.each(Object.keys(ALIGN))("should have align-items", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} align={ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      alignItems: getAlign(ALIGN[key]),
    });
  });

  it.each(Object.keys(TEXT_ALIGN))("should have textAlign", key => {
    render(
      <Box dataTest={`${dataTest}-${key}`} textAlign={TEXT_ALIGN[key]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${key}`)).toHaveStyle({
      textAlign: TEXT_ALIGN[key],
    });
  });

  it.each(Object.values(OVERFLOW))("should have overflow", overflow => {
    render(
      <Box dataTest={`${dataTest}-${overflow}`} overflow={overflow}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${overflow}`)).toHaveStyle({
      overflow,
    });
  });

  it.each(Object.keys(BORDER_RADIUS))("should have border-radius", radius => {
    render(
      <Box dataTest={`${dataTest}-${radius}`} borderRadius={radius as Props["borderRadius"]}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(`${dataTest}-${radius}`)).toHaveStyle({
      "border-radius": BORDER_RADIUS[radius],
    });
  });

  it("should have ref", () => {
    const ref = React.createRef<HTMLDivElement>();

    render(
      <Box dataTest={dataTest} ref={ref} top="10px" left="5px" right="0" bottom="0">
        kek
      </Box>,
    );

    expect(ref).toBeDefined();
  });

  it("should have left, right, top, bottom", () => {
    render(
      <Box dataTest={dataTest} top="10px" left="5px" right="0" bottom="0">
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-top": "10px",
      top: "var(--box-top)",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-bottom": "0",
      bottom: "var(--box-bottom)",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-left": "5px",
      left: "var(--box-left)",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "--box-right": "0",
      right: "var(--box-right)",
    });
  });

  it("should have z-index", () => {
    render(
      <Box dataTest={dataTest} position="absolute" zIndex={3}>
        kek
      </Box>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      "z-index": "var(--box-z-index)",
      "--box-z-index": "3",
    });
  });

  it("should have padding and margin object props", () => {
    render(
      <Box
        dataTest="kek"
        margin={{ top: "XSmall", left: "XXXSmall", bottom: "none", right: "medium" }}
        padding={{ top: "XXLarge", left: "XXSmall", bottom: "XXXLarge", right: "large" }}
      >
        kek
      </Box>,
    );

    expect(screen.getByTestId("kek")).toHaveStyle({
      padding: "40px 24px 52px 4px",
      margin: "8px 16px 0 2px",
    });
  });

  it("should have padding and margin string props", () => {
    render(
      <Box dataTest="kek" margin="small" padding="XLarge">
        kek
      </Box>,
    );

    expect(screen.getByTestId("kek")).toHaveStyle({
      padding: "32px",
      margin: "12px",
    });
  });

  it("should have elevation", () => {
    const test = Object.keys(ELEVATION).map((key, idx) => (
      <Box dataTest={`${dataTest}-${idx}`} elevation={ELEVATION[key]}>
        kek
      </Box>
    ));

    const testEl = (idx: number) => render(test[idx]).getByTestId(`${dataTest}-${idx}`);

    expect(testEl(0)).toHaveStyle({
      "--tw-shadow": theme.orbit.boxShadowAction,
    });
    expect(testEl(1)).toHaveStyle({ "--tw-shadow": theme.orbit.boxShadowFixed });
    expect(testEl(2)).toHaveStyle({ "--tw-shadow": theme.orbit.boxShadowRaised });
    expect(testEl(3)).toHaveStyle({ "--tw-shadow": theme.orbit.boxShadowOverlay });
    expect(testEl(4)).toHaveStyle({ "--tw-shadow": theme.orbit.boxShadowFixedReverse });
  });
});
