// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Slide from "../index";

jest.useFakeTimers();

describe(`slide util`, () => {
  const component = shallow(
    <Slide maxHeight={20} expanded>
      <div>Expanded content</div>
    </Slide>,
  );

  it("should have passed props", () => {
    expect(component.prop("expanded")).toBe(true);
  });

  it("should map props to state", () => {
    expect(component.state("maxHeight")).toBe(20);
  });

  it("should collapse", () => {
    component.setProps({ expanded: false });
    component.update();
    setTimeout(() => {
      expect(component.state("maxHeight")).toBe(0);
    }, 1);
  });

  it("should expand", () => {
    component.setProps({ expanded: true });
    component.update();
    expect(component.state("maxHeight")).toBe(20);
  });

  it("removed maxHeight after expand", () => {
    setTimeout(() => {
      expect(component.state("maxHeight")).toBe(null);
    }, 150);

    jest.runAllTimers();
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
