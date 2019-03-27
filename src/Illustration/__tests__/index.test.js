// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Illustration from "../index";
import { SIZE_OPTIONS } from "../consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTheme from "../../defaultTheme";

const size = SIZE_OPTIONS.SMALL;
const name = "Accommodation";
const dataTest = "test";

const URL = "//images.kiwi.com/illustrations/0x90/Accommodation.png";
const URL_RETINA = "//images.kiwi.com/illustrations/0x180/Accommodation.png 2x";

describe(`Illustration of ${name}`, () => {
  const component = shallow(
    <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={SPACINGS_AFTER.NORMAL} />,
  );

  const mountedComponent = mount(
    <Illustration size={size} name={name} dataTest={dataTest} spaceAfter={SPACINGS_AFTER.NORMAL} />,
  );

  it("should have passed props", () => {
    expect(component.prop("size")).toBe(size);
    expect(component.render().prop("alt")).toBe(name);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should render proper image", () => {
    expect(component.render().attr("src")).toContain(URL);
    expect(component.render().attr("srcset")).toContain(URL_RETINA);
  });
  it("should have margin-bottom", () => {
    expect(mountedComponent).toHaveStyleRule("margin-bottom", defaultTheme.orbit.spaceSmall);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
