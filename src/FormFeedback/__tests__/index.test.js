// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedback from "../index";

describe("FormFeedback", () => {
  const dataTest = "test";
  const error = "err";
  const component = shallow(
    <FormFeedback tooltipShown error={error} dataTest={dataTest}>
      FormFeedback
    </FormFeedback>,
  );
  it("should have data-test", () => {
    expect(component.find("FormFeedbackTooltip").prop("dataTest")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
