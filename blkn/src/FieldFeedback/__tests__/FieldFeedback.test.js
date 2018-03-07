// @flow

import * as React from "react";
import { shallow } from "enzyme";
import FieldFeedback from "../";

describe("Select", () => {
  const errorFeedback = shallow(<FieldFeedback error="Error message" help="Help message" />);
  const helpFeedback = shallow(<FieldFeedback help="Help message" />);
  it("should not render help when error is present", () => {
    expect(errorFeedback.html()).toMatch(/Error/);
    expect(errorFeedback.html()).not.toMatch(/Help/);
  });
  it("should render help feedback", () => {
    expect(helpFeedback.html()).toMatch(/Help/);
  });
});
