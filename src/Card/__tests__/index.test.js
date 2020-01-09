// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Card, { CardSection } from "../index";

describe("#Card", () => {
  const dataTest = "test";
  const component = shallow(
    <Card
      title="kek"
      icon="icon"
      description="description"
      dataTest={dataTest}
      actions="actions"
    />,
  );

  const withLoading = shallow(
    <Card loading>
      <CardSection>Section</CardSection>
    </Card>,
  );

  const header = component.find("Header");

  it("should have data-test", () => {
    expect(component.prop("data-test")).toBe(dataTest);
  });

  it("should have header component", () => {
    expect(header.exists()).toBe(true);
  });

  it("should have title", () => {
    expect(header.prop("title")).toBe("kek");
  });

  it("should have icon", () => {
    expect(header.prop("icon")).toBe("icon");
  });

  it("should have description", () => {
    expect(header.prop("description")).toBe("description");
  });

  it("should have actions", () => {
    expect(header.prop("actions")).toBe("actions");
  });

  it("should have Loading", () => {
    expect(withLoading.find("Loading").exists()).toBe(true);
    expect(withLoading.find("Loading").prop("loading")).toBe(true);
  });
});
