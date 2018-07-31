// @flow
import * as React from "react";
import { shallow } from "enzyme";

import FormFeedback from "../index";

describe("FormFeedback", () => {
  const component = shallow(<FormFeedback>FormFeedback</FormFeedback>);

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
