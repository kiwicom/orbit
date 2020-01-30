// @flow
import { mount } from "enzyme";
import * as React from "react";

import PictureCard from "..";

const props = {
  height: "400px",
  width: "800px",
  title: "Dubai",
  label: "Family Fun",
  href: "http://weslav.com",
  external: true,
  subTitle: "Prague",
  image: {
    original: "385x320",
    code: "dubai_ae",
    name: "dubai_ae",
    placeholder: "385x320",
  },
};

const wrapper = mount(<PictureCard {...props} />);

describe("#PictureCard", () => {
  it("should have an image", () => {
    expect(wrapper.find("img").exists()).toBe(true);
  });

  it("should set height and width", () => {
    const StyledPictureCard = wrapper.find("PictureCard__StyledPictureCard");

    expect(StyledPictureCard.exists()).toBe(true);
    expect(StyledPictureCard.prop("height")).toBe(props.height);
    expect(StyledPictureCard.prop("width")).toBe(props.width);
    expect(StyledPictureCard).toHaveStyleRule("height", props.height);
    expect(StyledPictureCard).toHaveStyleRule("width", props.width);
  });

  it("should have title, subTitel and label", () => {
    expect(wrapper.contains(props.title)).toBe(true);
    expect(wrapper.contains(props.subTitle)).toBe(true);
    expect(wrapper.contains(props.label)).toBe(true);
  });

  it("should render an anchor element if href is present", () => {
    expect(wrapper.find("a").exists()).toBe(true);
    expect(wrapper.find("PictureCard__StyledPictureCard").prop("href")).toBe(props.href);
  });
});
