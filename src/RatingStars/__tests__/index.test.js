// @flow

import * as React from "react";
import { shallow } from "enzyme";

import RatingStars from "../index";
import StarFull from "../../icons/StarFull";
import StarEmpty from "../../icons/StarEmpty";

describe("RatingStars", () => {
  const dataTest = "test";
  const rating = 2.4;
  const component = shallow(<RatingStars rating={rating} dataTest={dataTest} />);
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should render 4 full stars and 1 empty", () => {
    component.children().forEach((node, key) => {
      expect(node.type()).toBe(key <= Math.round(rating) - 1 ? StarFull : StarEmpty);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
