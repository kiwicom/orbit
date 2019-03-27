// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import Card from "../index";
import CardSection from "../CardSection";
import Heading from "../../Heading";
import Text from "../../Text";
import SPACINGS_AFTER from "../../common/getSpacingToken/consts";
import defaultTheme from "../../defaultTheme";
import CardSectionHeader from "../CardSection/CardSectionHeader";
import CardSectionContent from "../CardSection/CardSectionContent";
import CLOSE_BUTTON_DATA_TEST from "../consts";

const text = "Text for testing";

describe("Card", () => {
  it("should contain CardSection", () => {
    const component = shallow(
      <Card dataTest="test">
        <CardSection>
          <Heading type="title3" element="h3">
            {text}
          </Heading>
          <Text>{text}</Text>
        </CardSection>
      </Card>,
    );

    expect(component.find("CardSection").exists()).toBe(true);
  });

  it("should have margin-bottom", () => {
    const component = mount(<Card spaceAfter={SPACINGS_AFTER.NORMAL} />);
    expect(component).toHaveStyleRule("margin-bottom", defaultTheme.orbit.spaceSmall);
  });

  it("should have data-test", () => {
    const dataTest = "test";
    const component = shallow(<Card dataTest={dataTest} />);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should be closable", () => {
    const onClose = jest.fn();
    const component = shallow(<Card onClose={onClose} closable />);
    const ButtonLink = component.find("ButtonLink");
    expect(ButtonLink.prop("dataTest")).toBe(CLOSE_BUTTON_DATA_TEST);
    ButtonLink.simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
});

describe("CardSection", () => {
  const onExpand = jest.fn();
  const onClose = jest.fn();

  const component = mount(
    <Card>
      <CardSection expandable onExpand={onExpand} onClose={onClose}>
        <CardSectionHeader>
          <Heading type="title3" element="h3">
            Title
          </Heading>
          <Text>Description</Text>
        </CardSectionHeader>
        <CardSectionContent>Content</CardSectionContent>
      </CardSection>
    </Card>,
  );

  it("should have callback onExpand", () => {
    component.find("CardSectionHeader__StyledCardSectionHeader").simulate("click");
    expect(onExpand).toHaveBeenCalled();
  });
});
