// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedback from "../index";

describe("FormFeedback", () => {
  const error = "test";
  const component = shallow(<FormFeedback error={error} />);

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(error);
  });
});
