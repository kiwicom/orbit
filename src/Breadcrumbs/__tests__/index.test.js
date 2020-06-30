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
  const wrapper = component.find("Breadcrumbs__StyledBreadcrumbs");
  const list = component.find("Breadcrumbs__StyledBreadcrumbsList");
  it("nav should contain label, role and data-test", () => {
    expect(wrapper.render().prop("name")).toBe("nav");
    expect(wrapper.render().prop("role")).toBe("navigation");
    expect(wrapper.render().prop("aria-label")).toBe("Breadcrumb");
    expect(wrapper.render().prop("data-test")).toBe(dataTest);
  });
  it("ol should contain correct item type", () => {
    expect(list.render().prop("name")).toBe("ol");
    expect(list.render().prop("attribs").itemtype).toContain("BreadcrumbList");
  });
  it("children should contain active and contentKey", () => {
    expect(list.find("BreadcrumbsItem").prop("active")).toBe(true);
    expect(list.find("BreadcrumbsItem").prop("contentKey")).toBe(1);
  });
  it("should execute onGoBack", () => {
    component.find("GoBackButton").simulate("click");
    expect(onGoBack).toHaveBeenCalled();

    component.find("[dataTest='BreadcrumbsBack']").simulate("click");
    expect(onGoBack).toHaveBeenCalled();
  });
});

describe("Breadcrumbs", () => {
  const onClick = jest.fn();
  const url = "https://kiwi.com";
  const title = "Kiwi.com";
  const dataTest = "test";
  const id = "id";
  const component = shallow(
    <BreadcrumbsItem id={id} href={url} onClick={onClick} dataTest={dataTest} active contentKey={2}>
      {title}
    </BreadcrumbsItem>,
  );
  const anchor = component.find("BreadcrumbsItem__StyledBreadcrumbsItemAnchor");
  it("li contains props", () => {
    expect(component.render().prop("name")).toBe("li");
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.render().prop("attribs").itemprop).toBe("itemListElement");
    expect(component.render().prop("attribs").itemtype).toContain("ListItem");
    expect(component.render().prop("aria-current")).toBe("page");
    expect(anchor.render().prop("itemid")).toBe(id);
  });
  it("anchor contains props", () => {
    expect(anchor.render().prop("href")).toBe(url);
    expect(anchor.render().prop("itemprop")).toBe("item");
    expect(anchor.render().prop("itemtype")).toContain("WebPage");
    expect(anchor.children().find("span").render().prop("itemprop")).toBe("name");
    expect(anchor.children().find("span").children().text()).toBe(title);
  });
  it("meta contains props", () => {
    expect(component.children().find("meta").render().prop("itemprop")).toBe("position");
    expect(component.children().find("meta").prop("content")).toBe(2);
  });
  it("itemid defaults to href when no id attribute", () => {
    const componentWithoutID = shallow(
      <BreadcrumbsItem href={url} onClick={onClick} dataTest={dataTest} active contentKey={2}>
        {title}
      </BreadcrumbsItem>,
    );
    const anchorWithoutID = componentWithoutID.find("BreadcrumbsItem__StyledBreadcrumbsItemAnchor");

    expect(anchorWithoutID.render().prop("itemid")).toBe(url);
  });
});
