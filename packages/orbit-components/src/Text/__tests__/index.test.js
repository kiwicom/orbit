// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Text from "../index";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import { SIZE_OPTIONS, TYPE_OPTIONS } from "../consts";
import defaultTheme from "../../defaultTheme";

describe("Text", () => {
  const text = "Children text";
  const dataTest = "test";
  const spaceAfter = SPACINGS_AFTER.NORMAL;
  const type = TYPE_OPTIONS.PRIMARY;
  const size = SIZE_OPTIONS.SMALL;
  const id = "id";
  const component = shallow(
    <Text type={type} size={size} dataTest={dataTest} spaceAfter={spaceAfter} id={id}>
      {text}
    </Text>,
  );
  it("should have passed props", () => {
    expect(component.prop("type")).toBe(type);
    expect(component.prop("size")).toBe(size);
    expect(component.prop("spaceAfter")).toBe(spaceAfter);
    expect(component.prop("id")).toBe(id);
  });
  it("should contain children", () => {
    expect(component.children().text()).toBe(text);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have margin-bottom", () => {
    const mounted = mount(<Text spaceAfter={spaceAfter}>{text}</Text>);
    expect(mounted).toHaveStyleRule("margin-bottom", defaultTheme.orbit.spaceSmall);
  });
});
