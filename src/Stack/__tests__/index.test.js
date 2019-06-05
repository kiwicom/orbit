// @flow
import * as React from "react";
import { mount } from "enzyme";

import Stack from "../index";
import InputField from "../../InputField";
import Button from "../../Button";
import { ALIGNS, DIRECTIONS, JUSTIFY, SPACINGS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import theme from "../../defaultTheme";
import { getBreakpointWidth } from "../../utils/mediaQuery";
import { QUERIES } from "../../utils/mediaQuery/consts";

const defaultValues = {
  align: "start",
  basis: undefined,
  direction: "column",
  grow: true,
  inline: false,
  justify: "start",
  shrink: false,
  spaceAfter: undefined,
  spacing: "natural",
  wrap: false,
};

describe("Default Stack", () => {
  const spacing = SPACINGS.EXTRALOOSE;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const dataTest = "test";
  const component = mount(
    <Stack spacing={spacing} spaceAfter={spaceAfter} dataTest={dataTest}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("smallMobile")).toEqual(
      Object.assign(defaultValues, { spacing, spaceAfter }),
    );
    expect(stack.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain children", () => {
    expect(stack.find("InputField").exists()).toBe(true);
    expect(stack.find("Button").exists()).toBe(true);
  });
  it("should not contain styles", () => {
    expect(stack).not.toHaveStyleRule("display", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-direction", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-wrap", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-shrink", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-grow", expect.any(String));
    expect(stack).not.toHaveStyleRule("flex-basis", expect.any(String));
    expect(stack).not.toHaveStyleRule("justify-content", expect.any(String));
    expect(stack).not.toHaveStyleRule("align-items", expect.any(String));
    expect(stack).not.toHaveStyleRule("align-content", expect.any(String));
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("margin-bottom", theme.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 0 36px 0!important", {
      modifier: "& > *",
    });
    expect(stack).toHaveStyleRule("margin", "0 !important", {
      modifier: "& > *:last-child",
    });
    expect(stack).toHaveStyleRule("margin", "0 0 40px 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(stack).toMatchSnapshot();
  });
});

describe("Stack with flex prop", () => {
  const component = mount(
    <Stack flex>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");

  it("should have passed props", () => {
    expect(stack.prop("flex")).toBe(true);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "0");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("justify-content", "flex-start");
    expect(stack).toHaveStyleRule("align-items", "flex-start");
    expect(stack).toHaveStyleRule("align-content", "flex-start");
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(stack).toMatchSnapshot();
  });
});

describe("Stack with enabled flex", () => {
  const inline = false;
  const direction = DIRECTIONS.ROW;
  const wrap = false;
  const shrink = true;
  const grow = false;
  const basis = "550px";
  const align = ALIGNS.CENTER;
  const justify = JUSTIFY.CENTER;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const spacing = SPACINGS.NATURAL;
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
    spacing: SPACINGS.COMPACT,
  };

  const component = mount(
    <Stack
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
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("smallMobile")).toEqual(
      Object.assign(defaultValues, {
        inline,
        direction,
        wrap,
        shrink,
        grow,
        basis,
        align,
        justify,
        spaceAfter,
        spacing,
      }),
    );
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("width", "100%");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "1");
    expect(stack).toHaveStyleRule("flex-grow", "0");
    expect(stack).toHaveStyleRule("flex-basis", "550px");
    expect(stack).toHaveStyleRule("justify-content", "center");
    expect(stack).toHaveStyleRule("align-items", "center");
    expect(stack).toHaveStyleRule("align-content", "center");
    expect(stack).toHaveStyleRule("margin-bottom", theme.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).not.toHaveStyleRule("width", expect.any(String), {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-wrap", "wrap", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-shrink", "0", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-grow", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-basis", "auto", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("align-content", "flex-start", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("justify-content", "flex-end", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("align-items", "flex-start", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(component).toHaveStyleRule("margin-bottom", theme.orbit.spaceXSmall, {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 12px 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
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
    spacing: SPACINGS.COMPACT,
  };

  const component = mount(
    <Stack desktop={desktop}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "nowrap");
    expect(stack).toHaveStyleRule("flex-shrink", "0");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("justify-content", "flex-start");
    expect(stack).toHaveStyleRule("align-items", "flex-start");
    expect(stack).toHaveStyleRule("align-content", "flex-start");
    expect(stack).toHaveStyleRule("margin", "0 16px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-wrap", "wrap", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-shrink", "1", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-grow", "0", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-basis", "auto", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("justify-content", "flex-end", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin-bottom", theme.orbit.spaceXSmall, {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 12px 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
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
  const spacing = SPACINGS.EXTRALOOSE;
  const desktop = {
    shrink: false,
    direction: DIRECTIONS.COLUMN,
    spacing: SPACINGS.LOOSE,
  };

  const component = mount(
    <Stack
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
  const stack = component.find("Stack__StyledStack");
  it("should have passed props", () => {
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "inline-flex");
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("flex-wrap", "wrap");
    expect(stack).toHaveStyleRule("flex-shrink", "1");
    expect(stack).toHaveStyleRule("flex-grow", "1");
    expect(stack).toHaveStyleRule("flex-basis", "auto");
    expect(stack).toHaveStyleRule("justify-content", "flex-end");
    expect(stack).toHaveStyleRule("align-items", "flex-end");
    expect(stack).toHaveStyleRule("align-content", "flex-end");
    expect(stack).toHaveStyleRule("margin-bottom", theme.orbit.spaceLarge);
    expect(stack).toHaveStyleRule("margin", "0 36px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles - only defined", () => {
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("flex-shrink", "0", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 32px 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *",
    });
  });
});
describe("Stack with every media query", () => {
  const component = mount(
    <Stack
      direction={DIRECTIONS.ROW}
      spacing={SPACINGS.NONE}
      mediumMobile={{ direction: DIRECTIONS.COLUMN }}
      largeMobile={{ spacing: SPACINGS.LOOSE }}
      tablet={{ direction: DIRECTIONS.ROW }}
      desktop={{ spacing: SPACINGS.EXTRATIGHT }}
      largeDesktop={{ direction: DIRECTIONS.COLUMN }}
    >
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should contain default styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).not.toHaveStyleRule("margin", expect.any(String), {
      modifier: "& > *",
    });
  });
  it("should contain mediumMobile styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
    });
    expect(stack).not.toHaveStyleRule("margin", expect.any(String), {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *",
    });
  });
  it("should contain largeMobile styles", () => {
    expect(stack).toHaveStyleRule("margin", "0 0 28px 0!important", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *",
    });
  });
  it("should contain tablet styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "row", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 32px 0 0!important", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("margin", "0 2px 0 0!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *",
    });
  });
  it("should contain largeDesktop styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 2px 0!important", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *",
    });
  });
});
describe("Stack with every media query and reverse directions", () => {
  const component = mount(
    <Stack
      direction={DIRECTIONS.ROW}
      spacing={SPACINGS.TIGHT}
      mediumMobile={{ direction: DIRECTIONS.COLUMNREVERSE }}
      largeMobile={{ spacing: SPACINGS.LOOSE }}
      tablet={{ direction: DIRECTIONS.ROWREVERSE }}
      desktop={{ spacing: SPACINGS.EXTRATIGHT }}
      largeDesktop={{ direction: DIRECTIONS.COLUMN }}
    >
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");
  it("should contain default styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "row");
    expect(stack).toHaveStyleRule("margin", "0 4px 0 0!important", {
      modifier: "& > *",
    });
  });
  it("should contain mediumMobile styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "column-reverse", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
    });
    expect(stack).toHaveStyleRule("margin", "4px 0 0 0!important", {
      media: getBreakpointWidth(QUERIES.MEDIUMMOBILE, theme),
      modifier: "& > *",
    });
  });
  it("should contain largeMobile styles", () => {
    expect(stack).toHaveStyleRule("margin", "28px 0 0 0!important", {
      media: getBreakpointWidth(QUERIES.LARGEMOBILE, theme),
      modifier: "& > *",
    });
  });
  it("should contain tablet styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "row-reverse", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 0 32px!important", {
      media: getBreakpointWidth(QUERIES.TABLET, theme),
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(stack).toHaveStyleRule("margin", "0 0 0 2px!important", {
      media: getBreakpointWidth(QUERIES.DESKTOP, theme),
      modifier: "& > *",
    });
  });
  it("should contain largeDesktop styles", () => {
    expect(stack).toHaveStyleRule("flex-direction", "column", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
    });
    expect(stack).toHaveStyleRule("margin", "0 0 2px 0!important", {
      media: getBreakpointWidth(QUERIES.LARGEDESKTOP, theme),
      modifier: "& > *",
    });
  });
});
