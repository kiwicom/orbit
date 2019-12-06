// @flow

import * as React from "react";
import { mount } from "enzyme";

import theme from "../../../defaultTheme";
import CardWrapper from "../CardWrapper";

describe("#Wrapper", () => {
  const dataTest = "test";

  const component = mount(
    <CardWrapper dataTest={dataTest} expandable roundedTop roundedBottom bottomBorder expanded>
      children
    </CardWrapper>,
  );

  const componentNoBorderTop = mount(
    <CardWrapper dataTest={dataTest} noBorderTop>
      children
    </CardWrapper>,
  );

  const StyledWrapper = component.find("StyledComponent");

  it("should have data-test", () => {
    expect(StyledWrapper.prop("data-test")).toBe(dataTest);
  });

  it("should have bottom-border", () => {
    expect(StyledWrapper.prop("bottomBorder")).toBe(true);
    expect(StyledWrapper).toHaveStyleRule(
      "border-bottom",
      `${theme.orbit.borderWidthCard} ${theme.orbit.borderStyleCard} ${
        theme.orbit.borderColorCard
      }`,
    );
  });

  it("should have rounded top borders", () => {
    expect(StyledWrapper.prop("roundedTop")).toBe(true);
    expect(StyledWrapper).toHaveStyleRule("border-top-left-radius", theme.orbit.borderRadiusLarge);
    expect(StyledWrapper).toHaveStyleRule("border-top-right-radius", theme.orbit.borderRadiusLarge);
  });

  it("should have rounded bottom borders", () => {
    expect(StyledWrapper.prop("roundedBottom")).toBe(true);
    expect(StyledWrapper).toHaveStyleRule(
      "border-bottom-left-radius",
      theme.orbit.borderRadiusLarge,
    );
    expect(StyledWrapper).toHaveStyleRule(
      "border-bottom-right-radius",
      theme.orbit.borderRadiusLarge,
    );
  });

  it("should't have border-top", () => {
    expect(componentNoBorderTop.find("StyledComponent").prop("noBorderTop")).toBe(true);
    expect(componentNoBorderTop.find("StyledComponent")).toHaveStyleRule(
      "border-top",
      "1px solid transparent",
    );
  });
});
