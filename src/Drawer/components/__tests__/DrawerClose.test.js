// @flow
import * as React from "react";
import { shallow } from "enzyme";

import DrawerClose from "../DrawerClose";

describe("DrawerClose", () => {
  const onClick = jest.fn();
  const component = shallow(<DrawerClose onClick={onClick} />);
  const button = component.find("ButtonLink");
  it("should execute onClose method", () => {
    button.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("button should be setup for box type", () => {
    expect(button.prop("type")).toBe("secondary");
    expect(button.prop("title")).toBe("Hide");
  });
});
