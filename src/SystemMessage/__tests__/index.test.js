// @flow

import * as React from "react";
import { shallow } from "enzyme";
import SystemMessage from "../";

describe("System Message", () => {
  it("Should contain a Message ", () => {
    const component = shallow(<SystemMessage type="success" />);
    expect(component.find("Message").exists()).toBe(true);
  });
});

describe("Rendered with title ", () => {
  const componentWithTitle = shallow(<SystemMessage type="success" title="title" />);
  it("Should contain Title", () => {
    expect(componentWithTitle.find("Title").exists()).toBe(true);
  });
});

describe("Rendered with icon ", () => {
  const icon = () => <i />;
  const componentWithIcon = shallow(<SystemMessage type="success" Icon={icon} />);
  it("Should contain IconWrapper", () => {
    expect(componentWithIcon.find("IconWrapper").exists()).toBe(true);
  });
});
