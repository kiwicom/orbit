// @flow
import * as React from "react";
import { shallow } from "enzyme";

import DestinationHeader from "../index";

describe("DestinationHeader", () => {
  const destinationName = "Dubai";
  const destination = "dubai_ae";
  const dataTest = "test";
  const goBack = jest.fn();

  const component = shallow(
    <DestinationHeader
      destinationName={destinationName}
      destination={destination}
      goBack={goBack}
      dataTest={dataTest}
    />,
  );
  const button = component.find("Button");
  const heading = component.find("Heading");
  it("should have passed props", () => {
    expect(heading.children().text()).toBe(destinationName);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should execute onGoBack method", () => {
    button.simulate("click");
    expect(goBack).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
