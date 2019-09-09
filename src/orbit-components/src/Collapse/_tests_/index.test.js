// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Collapse from "../index";

/*
  useEffect is not called in enzyme, so we can't test if the contentHeight is calculated or not
  https://github.com/airbnb/enzyme/issues/2086
  https://github.com/facebook/react/pull/16168
 */

describe("Collapse", () => {
  const dataTest = "test";
  const label = "Collapse";
  const component = shallow(
    <Collapse dataTest={dataTest} label={label}>
      <div>children</div>
    </Collapse>,
  );
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should have label and ButtonLink", () => {
    const labelContainer = component.find("Collapse__StyledCollapseLabel").find("Stack");
    expect(
      labelContainer
        .find("Heading")
        .children()
        .text(),
    ).toBe(label);
    expect(labelContainer.find("ButtonLink").exists()).toBe(true);
  });
  it("should have Slide with setup expanded and maxHeight", () => {
    const slide = component.find("Slide");
    expect(slide.prop("maxHeight")).toBe(0);
    expect(slide.prop("expanded")).toBe(false);
  });
});

describe("Collapse - controlled", () => {
  const onClick = jest.fn();
  const label = "Collapse";
  const component = shallow(
    <Collapse onClick={onClick} label={label} expanded>
      <div>children</div>
    </Collapse>,
  );
  it("should execute onClick method", () => {
    component.find("Collapse__StyledCollapseLabel").simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
