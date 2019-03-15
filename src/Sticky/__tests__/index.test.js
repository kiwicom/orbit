// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Sticky from "../index";
import Card from "../../Card";
import CardSection from "../../Card/CardSection";
import Heading from "../../Heading";
import Text from "../../Text";

const text = "Text for testing";

const wrapper = shallow(
  <Sticky>
    <Card>
      <CardSection>
        <Heading type="title3" element="h3">
          {text}
        </Heading>
        <Text>{text}</Text>
      </CardSection>
    </Card>
  </Sticky>,
);

const wrapperWithProps = mount(
  <Sticky offset={50}>
    <Card>
      <CardSection>
        <Heading type="title3" element="h3">
          {text}
        </Heading>
        <Text>{text}</Text>
      </CardSection>
    </Card>
  </Sticky>,
);

describe("Sticky", () => {
  it("should contain FloatingWrapper", () => {
    expect(wrapper.find("Sticky__StyledStickyContent").exists()).toBe(true);
  });

  it("should change offset if props is provided", () => {
    wrapperWithProps.setState({ height: 50 });
    expect(wrapperWithProps.find("Sticky__StyledStickyContent")).toHaveStyleRule("top", "50px");
  });

  it("should change width acc with parent div", () => {
    wrapperWithProps.setState({ width: 300, initialWidth: false });
    expect(wrapperWithProps.find("Sticky__StyledStickyContent")).toHaveStyleRule("width", "300px");
  });

  it("should take props", () => {
    expect(wrapperWithProps.prop("offset")).toBe(50);
  });
});
