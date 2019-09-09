// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Breadcrumbs from "../index";
import BreadcrumbsItem from "../BreadcrumbsItem";

describe("Breadcrumbs", () => {
  const dataTest = "test";
  const onGoBack = jest.fn();
  const component = shallow(
    <Breadcrumbs dataTest={dataTest} onGoBack={onGoBack}>
      <BreadcrumbsItem href="https://kiwi.com">Kiwi.com</BreadcrumbsItem>
    </Breadcrumbs>,
  );
  const list = component.find("Breadcrumbs__StyledBreadcrumbsList");
  it("nav should contain label, role and data-test", () => {
    expect(component.render().prop("name")).toBe("nav");
    expect(component.render().prop("role")).toBe("navigation");
    expect(component.render().prop("aria-label")).toBe("Breadcrumb");
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("ol should contain vocab and typeof", () => {
    expect(list.render().prop("name")).toBe("ol");
    expect(list.render().prop("attribs").vocab).toBe("http://schema.org/");
    expect(list.render().prop("attribs").typeof).toBe("BreadcrumbList");
  });
  it("children should contain active and contentKey", () => {
    expect(list.find("BreadcrumbsItem").prop("active")).toBe(true);
    expect(list.find("BreadcrumbsItem").prop("contentKey")).toBe(1);
  });
  it("should execute onGoBack", () => {
    component.find("GoBackButton").simulate("click");
    expect(onGoBack).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("Breadcrumbs", () => {
  const onClick = jest.fn();
  const url = "https://kiwi.com";
  const title = "Kiwi.com";
  const dataTest = "test";
  const component = shallow(
    <BreadcrumbsItem href={url} onClick={onClick} dataTest={dataTest} active contentKey={2}>
      {title}
    </BreadcrumbsItem>,
  );
  const anchor = component.find("BreadcrumbsItem__StyledBreadcrumbsItemAnchor");
  it("li contains props", () => {
    expect(component.render().prop("name")).toBe("li");
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.render().prop("attribs").property).toBe("itemListElement");
    expect(component.render().prop("attribs").typeof).toBe("ListItem");
    expect(component.render().prop("aria-current")).toBe("page");
  });
  it("anchor contains props", () => {
    expect(anchor.render().prop("href")).toBe(url);
    expect(anchor.render().prop("property")).toBe("item");
    expect(anchor.render().prop("typeof")).toBe("WebPage");
    expect(
      anchor
        .children()
        .find("span")
        .prop("property"),
    ).toBe("name");
    expect(
      anchor
        .children()
        .find("span")
        .children()
        .text(),
    ).toBe(title);
  });
  it("meta contains props", () => {
    expect(
      component
        .children()
        .find("meta")
        .prop("property"),
    ).toBe("position");
    expect(
      component
        .children()
        .find("meta")
        .prop("content"),
    ).toBe(2);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
