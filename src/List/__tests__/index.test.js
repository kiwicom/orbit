// @flow
import * as React from "react";
import { shallow } from "enzyme";

import List from "../index";
import ListItem from "../ListItem";
import Check from "../../icons/Check";

describe(`List with custom colored icons`, () => {
  const size = "small";
  const type = "secondary";

  const content = "This contains a nice sentence";

  const component = shallow(
    <List size={size} type={type}>
      <ListItem icon={<Check color="green" />}>{content}</ListItem>
      <ListItem icon={<Check color="green" />}>{content}</ListItem>
      <ListItem icon={<Check color="green" />}>{content}</ListItem>
    </List>,
  );

  const children = component.find("ListItem");

  it("should have passed props", () => {
    expect(component.prop("size")).toBe(size);
    expect(component.prop("type")).toBe(type);
  });
  it("should have children", () => {
    children.forEach(node => {
      expect(node.type()).toBe(ListItem);
      expect(node.render().text()).toBe(content);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
