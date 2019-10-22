// @flow
import React from "react";
import { mount } from "enzyme/build";

import FeatureIcon from "../index";
import { baseURL, NAME_OPTIONS } from "../consts";

const name = NAME_OPTIONS.TICKETSAVER;

describe(`FeatureIcon: ${name}`, () => {
  const dataTest = "test";
  const component = mount(<FeatureIcon name={name} dataTest={dataTest} />).find("img");
  it("should have props", () => {
    const IMAGE_PATH = `${baseURL}/feature-icons/52x52/${name}.png`;
    const IMAGE_PATH_RETINA = `${baseURL}/feature-icons/104x104/${name}.png 2x,${baseURL}/feature-icons/156x156/${name}.png 3x`;
    expect(component.prop("src")).toBe(IMAGE_PATH);
    expect(component.prop("srcSet")).toBe(IMAGE_PATH_RETINA);
    expect(component.prop("alt")).toBe(name);
    expect(component.prop("data-test")).toBe(dataTest);
  });
});
