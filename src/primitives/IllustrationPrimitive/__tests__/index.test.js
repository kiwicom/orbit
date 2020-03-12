// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import IllustrationPrimitive from "../index";
import { SIZE_OPTIONS } from "../consts";
import SPACINGS_AFTER from "../../../common/getSpacingToken/consts";
import defaultTheme from "../../../defaultTheme";

const size = SIZE_OPTIONS.SMALL;
const name = "Accommodation";
const alt = "Alternative text";
const dataTest = "test";

const URL = "//images.kiwi.com/illustrations/0x90/Accommodation-Q85.png";
const URL_RETINA = "//images.kiwi.com/illustrations/0x180/Accommodation-Q85.png 2x";

describe(`IllustrationPrimitive of ${name}`, () => {
  const component = shallow(
    <IllustrationPrimitive
      size={size}
      name={name}
      alt={alt}
      dataTest={dataTest}
      spaceAfter={SPACINGS_AFTER.NORMAL}
    />,
  );

  const mountedComponent = mount(
    <IllustrationPrimitive
      size={size}
      name={name}
      dataTest={dataTest}
      spaceAfter={SPACINGS_AFTER.NORMAL}
    />,
  );

  it("should have passed props", () => {
    expect(component.prop("size")).toBe(size);
    expect(component.render().prop("alt")).toBe(alt);
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
