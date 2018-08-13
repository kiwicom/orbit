// @flow
import * as React from "react";
import { mount } from "enzyme";

import Stack from "../index";
import InputField from "../../InputField";
import Button from "../../Button";
import { ALIGNS, DIRECTIONS, SPACINGS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTokens from "../../defaultTokens";

describe("Default Stack", () => {
  const spacing = SPACINGS.EXTRALOOSE;
  const spaceAfter = SPACINGS_AFTER.LARGE;
  const component = mount(
    <Stack spacing={spacing} spaceAfter={spaceAfter}>
      <InputField type="password" label="Password" help="You need some help!" />
      <Button>Sign In</Button>
    </Stack>,
  );
  const stack = component.find("Stack__StyledStack");

  it("should have passed props", () => {
    expect(component.prop("spacing")).toBe(spacing);
    expect(component.prop("spaceAfter")).toBe(spaceAfter);
  });
  it("should contain children", () => {
    expect(component.find("InputField").exists()).toBe(true);
    expect(component.find("Button").exists()).toBe(true);
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
    expect(stack).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceLarge);
    expect(component).toHaveStyleRule("margin", "0 0 36px 0", {
      modifier: "& > *",
    });
    expect(component).toHaveStyleRule("margin", "0 0 40px 0", {
      media: "(min-width:600px)",
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
    expect(stack.prop("inline")).toBe(inline);
    expect(stack.prop("direction")).toBe(direction);
    expect(stack.prop("wrap")).toBe(wrap);
    expect(stack.prop("shrink")).toBe(shrink);
    expect(stack.prop("grow")).toBe(grow);
    expect(stack.prop("basis")).toBe(basis);
    expect(stack.prop("align")).toBe(align);
    expect(stack.prop("spaceAfter")).toBe(spaceAfter);
    expect(stack.prop("spacing")).toBe(spacing);
    expect(stack.prop("desktop")).toBe(desktop);
  });
  it("should contain children", () => {
    expect(component.find("InputField").exists()).toBe(true);
    expect(component.find("Button").exists()).toBe(true);
  });
  it("should contain styles", () => {
    expect(stack).toHaveStyleRule("display", "flex");
    expect(component).toHaveStyleRule("flex-direction", "row");
    expect(component).toHaveStyleRule("flex-wrap", "nowrap");
    expect(component).toHaveStyleRule("flex-shrink", "1");
    expect(component).toHaveStyleRule("flex-grow", "0");
    expect(component).toHaveStyleRule("flex-basis", "550px");
    expect(component).toHaveStyleRule("justify-content", "center");
    expect(component).toHaveStyleRule("align-items", "stretch");
    expect(component).toHaveStyleRule("align-content", "center");
    expect(component).toHaveStyleRule("margin-bottom", defaultTokens.orbit.spaceLarge);
    expect(component).toHaveStyleRule("margin", "0 16px 0 0", {
      modifier: "& > *",
    });
  });
  it("should contain desktop styles", () => {
    expect(component).toHaveStyleRule("display", "inline-flex", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("flex-direction", "column", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("flex-wrap", "wrap", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("flex-shrink", "0", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("flex-grow", "1", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("flex-basis", "auto", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("align-content", "flex-start", {
      media: "(min-width:600px)",
    });
    expect(component).toHaveStyleRule("margin", "0 0 12px 0", {
      media: "(min-width:600px)",
      modifier: "& > *",
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
