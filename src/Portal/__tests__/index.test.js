// @flow strict
import * as React from "react";
import { mount } from "enzyme";

import Portal from "../index";

describe("Portal with renderInto", () => {
  const target = document.createElement("div");
  target.setAttribute("id", "portal");

  // $FlowIssue
  document.body.appendChild(target);
  const component = mount(
    <Portal renderInto="portal">
      <p>Content</p>
    </Portal>,
  );
  it("should match snapshot", () => {
    expect(document.getElementById("portal")).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
  it("unmouted, should match snapshot", () => {
    component.unmount();
    expect(document.getElementById("portal")).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
});
describe("Portal without renderInto", () => {
  const component = mount(
    <Portal>
      <p>Content</p>
    </Portal>,
  );
  it("should match snapshot", () => {
    expect(document.getElementById("modal")).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
  it("unmouted, should match snapshot", () => {
    component.unmount();
    expect(document.getElementById("modal")).toMatchSnapshot();
    expect(component).toMatchSnapshot();
  });
});
