// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedback from "../index";

describe("FormFeedback", () => {
  const dataTest = "test";
  const error = "err";
  const help = "help";
  const component = shallow(<FormFeedback tooltipShown error={error} dataTest={dataTest} />);
  const componentHelp = shallow(<FormFeedback tooltipShown help={help} dataTest={dataTest} />);

  it("should have data-test", () => {
    expect(component.find("FormFeedbackTooltip").prop("dataTest")).toBe(dataTest);
  });
  it("should have children", () => {
    expect(component.children().render().text()).toBe(error);
    expect(componentHelp.children().render().text()).toBe(help);
  });
});
