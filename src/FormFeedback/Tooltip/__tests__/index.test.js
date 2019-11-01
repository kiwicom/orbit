// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedbackTooltip from "../index";

describe("FormFeedbackTooltip", () => {
  const content = "ErrorMessage";
  const component = shallow(<FormFeedbackTooltip shown>{content}</FormFeedbackTooltip>);

  it("should have children", () => {
    expect(
      component
        .find("Tooltip__StyledTooltipContent")
        .render()
        .text(),
    ).toBe(content);
  });
});
