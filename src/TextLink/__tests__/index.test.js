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
  const tabIndex = "-1";
  const dataTest = "test";
  const rel = "nofollow";

  const component = shallow(
    <TextLink
      onClick={onClick}
      href={href}
      type={type}
      rel={rel}
      external
      icon={<ChevronRight />}
      tabIndex={tabIndex}
      dataTest={dataTest}
    >
      {title}
    </TextLink>,
  );

  const componentWithoutHref = shallow(<TextLink>{title}</TextLink>);

  it("should contain a children", () => {
    expect(component.children().exists()).toBe(true);
  });
  it("should contain an href", () => {
    expect(component.render().prop("href")).toBe(href);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have noopener in attribute", () => {
    expect(
      component
        .render()
        .prop("rel")
        .split(" ")
        .includes("noopener"),
    ).toBe(true);
  });
  it("should have noreferrer in attribute", () => {
    expect(
      component
        .render()
        .prop("rel")
        .split(" ")
        .includes("noreferrer"),
    ).toBe(true);
  });
  it("should have rel values in the rel attribute", () => {
    expect(
      component
        .render()
        .prop("rel")
        .split(" ")
        .includes(rel),
    ).toBe(true);
  });
  it("should have tabindex", () => {
    expect(component.render().prop("tabindex")).toBe(tabIndex);
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
  it("should not have tabindex and role", () => {
    expect(component.render().prop("tabindex")).toBe("-1");
    expect(component.render().prop("role")).toBe("");
  });
  it("should have tabindex and role", () => {
    expect(componentWithoutHref.render().prop("tabindex")).toBe("0");
    expect(componentWithoutHref.render().prop("role")).toBe("button");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
