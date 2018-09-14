// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TextLink from "../index";
import ChevronRight from "../../icons/ChevronRight";

describe("TextLink", () => {
  const title = "My text link";
  const href = "https://kiwi.com";
  const onClick = jest.fn();
  const type = "primary";
  const dataTest = "test";

  const component = shallow(
    <TextLink
      onClick={onClick}
      href={href}
      type={type}
      external
      icon={<ChevronRight />}
      dataTest={dataTest}
    >
      {title}
    </TextLink>,
  );

  it("should contain a children", () => {
    expect(component.children().exists()).toBe(true);
  });
  it("should contain an href", () => {
    expect(component.render().prop("href")).toBe(href);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain an external href", () => {
    expect(component.render().prop("target")).toBe("_blank");
  });
  it("should contain SVG", () => {
    expect(component.find("ChevronRight").exists()).toBe(true);
  });
  it("should execute onClick method", () => {
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
