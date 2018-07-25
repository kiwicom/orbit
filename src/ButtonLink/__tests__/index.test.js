// @flow

import * as React from "react";
import { mount } from "enzyme";

import ButtonLink from "../index";
import Airplane from "../../icons/Airplane";

const children = "ButtonLink";
const href = "https://kiwi.com";

describe("ButtonLink with Icon", () => {
  const component = mount(
    <ButtonLink href={href} external>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(false);
  });
  it("should be external", () => {
    expect(button.prop("target")).toBe("_blank");
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("ButtonLink with Icon", () => {
  const component = mount(
    <ButtonLink icon={<Airplane />} href={href}>
      {children}
    </ButtonLink>,
  );
  const button = component.find("ButtonLink__StyledButtonLink");
  it("should contain a title ", () => {
    expect(button.render().text()).toBe(children);
  });
  it("should contain SVG", () => {
    expect(button.find("svg").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
