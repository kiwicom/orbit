// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Card from "../Card";
import CardSection from "../CardSection/CardSection";
import Heading from "../../Heading/Heading";
import Text from "../../Text/Text";

const text = "Text for testing";

describe("Card", () => {
  it("should contain CardSection", () => {
    const component = shallow(
      <Card>
        <CardSection>
          <Heading type="title3" element="h3">
            {text}
          </Heading>
          <Text>{text}</Text>
        </CardSection>
      </Card>,
    );
    component
      .find("Card__StyledCard")
      .children()
      .forEach(node => {
        expect(node.type()).toBe(CardSection);
      });
  });

  it("should be closable", () => {
    const onClose = jest.fn();
    const component = shallow(<Card onClose={onClose} closable />);
    component
      .find("Card__CloseContainer")
      .children()
      .simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
});
