// @flow
import * as React from "react";
import { shallow } from "enzyme";

import RadioGroup from "../";
import Radio from "../../Radio";

const label = "Label";
const onChange = jest.fn();
const Choices = {
  first: "first",
  second: "second",
  third: "third",
};

describe("RadioGroup", () => {
  const dataTest = "test";
  const component = shallow(
    <RadioGroup dataTest={dataTest} label={label} onChange={onChange}>
      <Radio value={Choices.first} />
      <Radio value={Choices.second} />
      <Radio value={Choices.third} />
    </RadioGroup>,
  );

  const InitialState = { value: 0 };

  it("Initialize with the state", () => {
    component.setState(InitialState);
    expect(component.state()).toEqual(InitialState);
  });

  it("should contain a label", () => {
    expect(
      component
        .find("RadioGroup__Label")
        .render()
        .text(),
    ).toBe(label);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should execute onChange method", () => {
    const instance = component.instance();
    const ev = { target: { value: "7" } };
    instance.handleChange(ev);
    expect(onChange).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
