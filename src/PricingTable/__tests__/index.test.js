// @flow

import * as React from "react";
import { mount } from "enzyme";

import Button from "../../Button";
import Badge from "../../Badge";
import PricingTableItem from "../PricingTableItem";
import PricingTable from "../index";
import PricingTableContext from "../PricingTableContext";

const onClick = jest.fn();
const onClick2 = jest.fn();
const dataTest = "test";
const name = "name";
const price = "$749";
const actions = <Button>Buy</Button>;
const content = <ul>List</ul>;
const image = <img alt="" />;
const badge = <Badge>Badge</Badge>;

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isTablet: false,
    };
  };
});

describe("PricingTableItem mobile", () => {
  const component = mount(
    <PricingTableContext.Provider value={{ basis: 0 }}>
      <PricingTableItem
        dataTest={dataTest}
        name={name}
        price={price}
        featureIcon={image}
        badge={badge}
        action={actions}
        active
        compact
        onClick={onClick}
      >
        {content}
      </PricingTableItem>
    </PricingTableContext.Provider>,
  );

  const pricingTableItem = component.find("PricingTableItem__StyledPricingTableItem");
  it("shouldn't render children", () => {
    expect(component.find("ul").exists()).toBe(false);
  });
  it("should have name", () => {
    expect(pricingTableItem.find("Text").at(0).children().text()).toBe(name);
  });
  it("should render data-test", () => {
    expect(pricingTableItem.render().prop("data-test")).toBe(dataTest);
  });
  it("should have price", () => {
    expect(pricingTableItem.find("Text").at(1).children().text()).toBe(price);
  });
  it("should have featureIcon", () => {
    expect(pricingTableItem.find("img").exists()).toBe(true);
  });
  it("should have badge", () => {
    expect(pricingTableItem.find("PricingTableItem__StyledBadgeWrapperContent").exists()).toBe(
      true,
    );
  });
  it("shouldn't have actions", () => {
    expect(pricingTableItem.find("Button").exists()).toBe(false);
  });
  it("should have checked radio button", () => {
    expect(pricingTableItem.find("Radio").props().checked).toBe(true);
  });
  it("should be actionable", () => {
    pricingTableItem.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});

describe("PricingTableItem desktop", () => {
  const component = mount(
    <PricingTableItem
      dataTest={dataTest}
      name={name}
      price={price}
      featureIcon={image}
      badge={badge}
      action={actions}
      active
      onClick={onClick2}
      compact={false}
    >
      {content}
    </PricingTableItem>,
  );

  const pricingTableItem = component.find("PricingTableItem__StyledPricingTableItem");
  it("should render children", () => {
    expect(component.find("ul").exists()).toBe(true);
  });
  it("should have name", () => {
    expect(pricingTableItem.find("Text").at(0).children().text()).toBe(name);
  });
  it("should have price", () => {
    expect(pricingTableItem.find("Text").at(1).children().text()).toBe(price);
  });
  it("should have featureIcon", () => {
    expect(pricingTableItem.find("img").exists()).toBe(true);
  });
  it("should have badge", () => {
    expect(pricingTableItem.find("PricingTableItem__StyledBadgeWrapperContent").exists()).toBe(
      true,
    );
  });
  it("should have actions", () => {
    expect(pricingTableItem.find("Button").exists()).toBe(true);
  });
  it("shouldn't have Radio button", () => {
    expect(pricingTableItem.find("Radio").exists()).toBe(false);
  });
  it("should be actionable", () => {
    pricingTableItem.simulate("click");
    expect(onClick2).toHaveBeenCalled();
  });
});

describe("PricingTable", () => {
  const mobileDescription = "Basic ticket fare includes:";
  const component = mount(
    <PricingTable activeElement={0} dataTest={dataTest}>
      <PricingTableItem
        dataTest={dataTest}
        name={name}
        price={price}
        featureIcon={image}
        badge={badge}
        action={actions}
        active
        onClick={onClick2}
        mobileDescription={mobileDescription}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        dataTest={dataTest}
        name={name}
        price={price}
        featureIcon={image}
        badge={badge}
        action={actions}
        active
        onClick={onClick2}
      >
        {content}
      </PricingTableItem>
      <PricingTableItem
        dataTest={dataTest}
        name={name}
        price={price}
        featureIcon={image}
        badge={badge}
        action={actions}
        active
        onClick={onClick2}
      >
        {content}
      </PricingTableItem>
    </PricingTable>,
  );

  it("should render data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should render children", () => {
    expect(component.find("PricingTableItem")).toHaveLength(4);
  });
  it("should render childrens actions", () => {
    expect(component.find("Button").exists()).toBe(true);
  });
  it("should render childrens children", () => {
    expect(component.find("ul").exists()).toBe(true);
  });
  // it("should render childrens mobileDescription", () => {
  //   expect(component.find("Text").at(7).children().text()).toBe(mobileDescription);
  // });
});
