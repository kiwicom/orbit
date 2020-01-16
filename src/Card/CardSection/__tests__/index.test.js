// @flow

import * as React from "react";
import { shallow } from "enzyme";

import CardSection from "..";

describe("#CardSection", () => {
  const dataTest = "test";
  const component = shallow(
    <CardSection
      title="kek"
      icon="icon"
      description="description"
      dataTest={dataTest}
      expandable
      expanded
      actions="actions"
    >
      Content
    </CardSection>,
  );

  const header = component.find("CardSectionHeader");
  const content = component.find("SectionContent");

  it("should have data-test", () => {
    expect(component.find("CardWrapper").prop("dataTest")).toBe(dataTest);
  });

  it("should have Content", () => {
    expect(content.exists()).toBe(true);
  });

  it("should have header component", () => {
    expect(header.exists()).toBe(true);
  });

  it("should have title", () => {
    expect(header.prop("title")).toBe("kek");
  });

  it("should be expandable", () => {
    expect(header.prop("expandable")).toBe(true);
  });

  it("should be expanded", () => {
    expect(header.prop("expandable")).toBe(true);
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
});
