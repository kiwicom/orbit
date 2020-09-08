// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedback from "../index";

describe("FormFeedback Error", () => {
  const error = "error message";
  const help = "help message";
  const dataTest = "dataTest";
  const component = shallow(<FormFeedback error={error} help={help} dataTest={dataTest} />);

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should render error", () => {
    expect(component.text()).toEqual(error);
  });
});

describe("FormFeedback Help", () => {
  const help = "test";
  const component = shallow(<FormFeedback error={undefined} help={help} />);

  it("should render help", () => {
    expect(component.text()).toEqual(help);
  });
});
