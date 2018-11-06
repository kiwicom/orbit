// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import ClickOutside from "../index";

describe("ClickOutside mount", () => {
  // $FlowExpected
  document.addEventListener = jest.fn();

  const component = mount(<ClickOutside onClickOutside={jest.fn()}>Lorem ipsum</ClickOutside>);
  const instance = component.instance();

  it("should mount", () => {
    expect(document.addEventListener).toBeCalledWith("click", instance.handleClickOutside, true);
  });
  it("should unmount", () => {
    // $FlowExpected
    document.removeEventListener = jest.fn();
    component.unmount();
    expect(document.removeEventListener).toBeCalledWith("click", instance.handleClickOutside, true);
  });
});

describe("ClickOutside shallow", () => {
  it("handler", () => {
    const onClickOutside = jest.fn();
    const wrapper = shallow(
      <ClickOutside onClickOutside={onClickOutside}>Lorem ipsum</ClickOutside>,
    );

    const instance = wrapper.instance();

    instance.node.current = document.createElement("div");
    const node = document.createElement("div");

    const ev = { target: node };
    instance.handleClickOutside(ev);

    expect(onClickOutside).toBeCalledWith(ev);
  });

  it("handler - no node", () => {
    const onClickOutside = jest.fn();
    const wrapper = shallow(
      <ClickOutside onClickOutside={onClickOutside}>Lorem ipsum</ClickOutside>,
    );

    const instance = wrapper.instance();
    const node = document.createElement("div");

    const ev = { target: node };
    instance.handleClickOutside(ev);

    expect(onClickOutside).not.toBeCalled();
  });

  it("handler - click inside", () => {
    const onClickOutside = jest.fn();
    const wrapper = shallow(
      <ClickOutside onClickOutside={onClickOutside}>Lorem ipsum</ClickOutside>,
    );

    const instance = wrapper.instance();

    instance.node = document.createElement("div");
    const node = document.createElement("div");
    instance.node.appendChild(node);

    const ev = { target: node };
    instance.handleClickOutside(ev);

    expect(onClickOutside).not.toBeCalled();
  });
  it("should match snapshot", () => {
    const onClickOutside = jest.fn();
    const wrapper = shallow(
      <ClickOutside onClickOutside={onClickOutside}>Lorem ipsum</ClickOutside>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
