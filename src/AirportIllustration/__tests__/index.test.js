// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import AirportIllustration from "../index";
import { SIZE_OPTIONS } from "../../primitives/IllustrationPrimitive/consts";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTheme from "../../defaultTheme";

const size = SIZE_OPTIONS.EXTRASMALL;
const name = "BGYFastTrack";
const dataTest = "test";

const URL = "//images.kiwi.com/illustrations/0x90/BGYFastTrack-Q85.png";
const URL_RETINA = "//images.kiwi.com/illustrations/0x180/BGYFastTrack-Q85.png 2x";

describe(`AirportIllustration of ${name}`, () => {
  const component = shallow(
    <AirportIllustration
      size={size}
      name={name}
      dataTest={dataTest}
      spaceAfter={SPACINGS_AFTER.NORMAL}
    />,
  );

  const mountedComponent = mount(
    <AirportIllustration
      size={size}
      name={name}
      dataTest={dataTest}
      spaceAfter={SPACINGS_AFTER.NORMAL}
    />,
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
});
