// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Layover from "../index";
import List from "../../../List";
import ListItem from "../../../List/ListItem";

describe("Layover", () => {
  const dataTest = "test";

  const component = shallow(
    <Layover dataTest={dataTest}>
      <List>
        <ListItem>1h 10m layover</ListItem>
        <ListItem>Transfer protected by the Kiwi.com Guarantee</ListItem>
        <ListItem>Changing airports is your responsibility</ListItem>
      </List>
    </Layover>,
  );

  it("should contain children", () => {
    expect(component.find("List").exists()).toBe(true);
  });

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
