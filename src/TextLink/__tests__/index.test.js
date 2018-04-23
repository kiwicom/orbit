// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TextLink from "../";

const title = "My text link";
const url = "https://kiwi.com";
const onClick = jest.fn();

describe("TextLink type: primary, size: default, newTab: false", () => {
  const type = "primary";
  const component = shallow(<TextLink title={title} onClick={onClick} url={url} type={type} />);
  const textlink = component.find("a");
  it("Should contain a title ", () => {
    expect(textlink.render().text()).toBe(title);
  });
  it("Should contain an url ", () => {
    expect(textlink.render().prop("href")).toBe(url);
  });
  it("Should execute onClick method", () => {
    textlink.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Should match snapshot", () => {
    expect(textlink).toMatchSnapshot();
  });
});

describe("TextLink type: secondary, size: large, newTab: true", () => {
  const type = "secondary";
  const size = "large";
  const newTab = true;
  const component = shallow(
    <TextLink title={title} onClick={onClick} url={url} type={type} size={size} newTab={newTab} />,
  );
  const textlink = component.find("a");
  it("Should contain a title ", () => {
    expect(textlink.render().text()).toBe(title);
  });
  it("Should contain an url ", () => {
    expect(textlink.render().prop("href")).toBe(url);
  });
  it("Should contain a target ", () => {
    expect(textlink.render().prop("target")).toBe("_blank");
  });
  it("Should execute onClick method", () => {
    textlink.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("Should match snapshot", () => {
    expect(textlink).toMatchSnapshot();
  });
});
