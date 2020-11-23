// @flow
import * as React from "react";
import { render, screen } from "@testing-library/react";

import Stack from "../index";
import defaultTheme from "../../defaultTheme";
import InputField from "../../InputField";
import Button from "../../Button";
import { ALIGNS, DIRECTIONS, JUSTIFY, SPACINGS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";

describe("Default Stack", () => {
  it("should have data-test", () => {
    render(
      <Stack dataTest="test">
        <InputField type="password" label="Password" help="You need some help!" />
        <Button>Sign In</Button>
      </Stack>,
    );

    expect(screen.getByTestId("test")).toBeInTheDocument();
  });

  it("should contain children", () => {
    render(<Stack dataTest="test">children</Stack>);
    expect(screen.getByText("children")).toBeInTheDocument();
  });

  it("should not contain styles", () => {
    const spacing = SPACINGS.XXLARGE;
    const spaceAfter = SPACINGS_AFTER.LARGE;
    const dataTest = "test";

    render(
      <Stack dataTest={dataTest} spaceAfter={spaceAfter} spacing={spacing}>
        children
      </Stack>,
    );

    expect(screen.getByTestId(dataTest)).not.toHaveStyle({
      display: "",
      flexDirection: "",
      flexWrap: "",
      justifyContent: "",
      alignItems: "",
      alignContent: "",
      flexShrink: "",
      flexGrow: "",
    });
  });

  it("should contain styles", () => {
    const spacing = SPACINGS.XXLARGE;
    const spaceAfter = SPACINGS_AFTER.LARGE;
    const dataTest = "test";

    render(
      <Stack dataTest={dataTest} spaceAfter={spaceAfter} spacing={spacing}>
        children
      </Stack>,
    );

    expect(screen.getByTestId(dataTest)).toHaveStyle({
      width: "100%",
      marginBottom: defaultTheme.orbit.spaceLarge,
    });

    expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 0 40px 0!important", {
      modifier: "& > *",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 !important", {
      modifier: "& > *:last-child",
    });
    expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 0 40px 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      modifier: "& > *",
    });
  });

  describe("Stack with flex prop", () => {
    it("should contain styles", () => {
      const dataTest = "test";

      render(
        <Stack flex dataTest={dataTest}>
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyle({
        display: "flex",
        width: "100%",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexShrink: "0",
        flexGrow: "1",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      });

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 16px 0 0!important", {
        modifier: "& > *",
      });
    });
  });

  describe("Stack with enabled flex", () => {
    const dataTest = "test";
    const inline = false;
    const direction = DIRECTIONS.ROW;
    const wrap = false;
    const shrink = true;
    const grow = false;
    const basis = theme => `calc(25% - ${theme.orbit.spaceLarge})`;
    const align = ALIGNS.CENTER;
    const justify = JUSTIFY.CENTER;
    const spaceAfter = SPACINGS_AFTER.LARGE;
    const spacing = SPACINGS.MEDIUM;
    const desktop = {
      inline: true,
      direction: DIRECTIONS.COLUMN,
      wrap: true,
      shrink: false,
      grow: true,
      basis: "auto",
      align: ALIGNS.START,
      justify: JUSTIFY.END,
      spaceAfter: SPACINGS_AFTER.SMALL,
      spacing: SPACINGS.SMALL,
    };

    it("should contain styles", () => {
      render(
        <Stack
          dataTest={dataTest}
          inline={inline}
          direction={direction}
          wrap={wrap}
          shrink={shrink}
          grow={grow}
          basis={basis}
          align={align}
          justify={justify}
          spaceAfter={spaceAfter}
          spacing={spacing}
          desktop={desktop}
        >
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyle({
        display: "flex",
        width: "100%",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexShrink: "1",
        justifyContent: "center",
        flexBasis: `calc(25% - ${defaultTheme.orbit.spaceLarge})`,
        alignItems: "center",
        alignContent: "center",
        flexGrow: "0",
        marginBottom: defaultTheme.orbit.spaceLarge,
      });

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 16px 0 0!important", {
        modifier: "& > *",
      });
    });

    it("should contain desktop styles", () => {
      render(
        <Stack
          dataTest={dataTest}
          inline={inline}
          direction={direction}
          wrap={wrap}
          shrink={shrink}
          grow={grow}
          basis={basis}
          align={align}
          justify={justify}
          spaceAfter={spaceAfter}
          spacing={spacing}
          desktop={desktop}
        >
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("display", "inline-flex", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });

      expect(screen.getByTestId(dataTest)).not.toHaveStyleRule("width", expect.any(String), {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-direction", "column", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-wrap", "wrap", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-shrink", "0", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-grow", "1", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-basis", "auto", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("align-content", "flex-start", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("justify-content", "flex-end", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("align-items", "flex-start", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule(
        "margin-bottom",
        defaultTheme.orbit.spaceXSmall,
        {
          media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        },
      );
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 0 12px 0!important", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        modifier: "& > *",
      });
    });
  });

  describe("Stack with only desktop properties", () => {
    const desktop = {
      inline: true,
      direction: DIRECTIONS.COLUMN,
      wrap: true,
      shrink: true,
      grow: false,
      basis: "auto",
      align: ALIGNS.START,
      justify: JUSTIFY.END,
      spaceAfter: SPACINGS_AFTER.SMALL,
      spacing: SPACINGS.SMALL,
    };

    it("should contain styles", () => {
      const dataTest = "test";

      render(
        <Stack dataTest={dataTest} desktop={desktop}>
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyle({
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        flexShrink: "0",
        flexGrow: "1",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "flex-start",
      });

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 16px 0 0!important", {
        modifier: "& > *",
      });
    });
    it("should contain desktop styles", () => {
      const dataTest = "test";

      render(
        <Stack dataTest={dataTest} desktop={desktop}>
          kek
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("display", "inline-flex", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-wrap", "wrap", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-shrink", "1", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-grow", "0", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-basis", "auto", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("justify-content", "flex-end", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule(
        "margin-bottom",
        defaultTheme.orbit.spaceXSmall,
        {
          media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        },
      );
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 0 12px 0!important", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        modifier: "& > *",
      });
    });
  });

  describe("Stack with mobile and some desktop properties", () => {
    const inline = true;
    const direction = DIRECTIONS.ROW;
    const wrap = true;
    const grow = true;
    const shrink = true;
    const basis = "auto";
    const align = ALIGNS.END;
    const justify = JUSTIFY.END;
    const spaceAfter = SPACINGS_AFTER.LARGE;
    const spacing = SPACINGS.XXLARGE;
    const desktop = {
      shrink: false,
      direction: DIRECTIONS.COLUMN,
      spacing: SPACINGS.XLARGE,
      basis: theme => `calc(25% - ${theme.orbit.spaceLarge})`,
    };

    const dataTest = "test";

    it("should contain styles", () => {
      render(
        <Stack
          inline={inline}
          direction={direction}
          wrap={wrap}
          dataTest={dataTest}
          shrink={shrink}
          grow={grow}
          basis={basis}
          align={align}
          justify={justify}
          spaceAfter={spaceAfter}
          spacing={spacing}
          desktop={desktop}
        >
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyle({
        display: "inline-flex",
        flexDirection: "row",
        flexWrap: "wrap",
        flexShrink: "1",
        flexGrow: "1",
        flexBasis: "auto",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        alignContent: "flex-end",
      });

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 40px 0 0!important", {
        modifier: "& > *",
      });
    });
    it("should contain desktop styles - only defined", () => {
      render(
        <Stack dataTest={dataTest} desktop={desktop} spacing={SPACINGS.XLARGE}>
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-direction", "column", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("flex-shrink", "0", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
      });
      expect(screen.getByTestId(dataTest)).toHaveStyleRule(
        "flex-basis",
        `calc(25% - ${defaultTheme.orbit.spaceLarge})`,
        {
          media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        },
      );
      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", "0 0 32px 0!important", {
        media: getBreakpointWidth(QUERIES.DESKTOP, defaultTheme),
        modifier: "& > *",
      });
    });
  });

  describe("Stack with every media query", () => {
    it.each(Object.values(QUERIES))("should have styles for each mediaquery: %s", query => {
      const dataTest = `${query}-test`;

      render(
        <Stack
          dataTest={dataTest}
          direction={DIRECTIONS.ROW}
          spacing={SPACINGS.NONE}
          mediumMobile={{ spacing: SPACINGS.XXSMALL }}
          largeMobile={{ spacing: SPACINGS.XSMALL }}
          tablet={{ spacing: SPACINGS.SMALL }}
          desktop={{ spacing: SPACINGS.MEDIUM }}
          largeDesktop={{ spacing: SPACINGS.LARGE }}
        >
          <InputField type="password" label="Password" help="You need some help!" />
          <Button>Sign In</Button>
        </Stack>,
      );

      const expected = {
        mediumMobile: "0 4px 0 0!important",
        largeMobile: "0 8px 0 0!important",
        tablet: "0 12px 0 0!important",
        desktop: "0 16px 0 0!important",
        largeDesktop: "0 24px 0 0!important",
      };

      expect(screen.getByTestId(dataTest)).toHaveStyleRule("margin", expected[query], {
        media: getBreakpointWidth(query, defaultTheme),
        modifier: "& > *",
      });
    });
  });
});
