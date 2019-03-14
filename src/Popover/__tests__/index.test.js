// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Popover from "../index";
import Button from "../../Button";

describe("Popover", () => {
  const content = "Write some message to the user";
  const component = shallow(
    <Popover content={content}>
      <Button>Open</Button>
    </Popover>,
  );
  it("it should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
