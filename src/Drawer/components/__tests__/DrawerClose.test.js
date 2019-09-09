// @flow
import * as React from "react";
import { shallow } from "enzyme";

import DrawerClose from "../DrawerClose";
import { TYPES } from "../../consts";

describe("DrawerClose", () => {
  const onClick = jest.fn();
  const type = TYPES.BOX;
  const component = shallow(<DrawerClose type={type} onClick={onClick} />);
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
