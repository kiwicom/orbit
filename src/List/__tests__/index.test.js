// @flow
import * as React from "react";
import { shallow } from "enzyme";

import List from "../index";
import ListItem from "../ListItem";
import Check from "../../icons/Check";

describe(`List with custom colored icons`, () => {
  const size = "small";
  const type = "secondary";
  const dataTest = "test";
  const content = "This contains a nice sentence";

  const component = shallow(
    <List size={size} type={type} dataTest={dataTest}>
      <ListItem icon={<Check color="success" />} dataTest={dataTest}>
        {content}
      </ListItem>
      <ListItem icon={<Check color="success" />} dataTest={dataTest}>
        {content}
      </ListItem>
      <ListItem icon={<Check color="success" />} dataTest={dataTest}>
        {content}
      </ListItem>
    </List>,
  );

  const children = component.find("ListItem");
  const styledList = component.find("List__StyledList");

  it("should have passed props", () => {
    expect(component.prop("size")).toBe(size);
    expect(component.prop("type")).toBe(type);
    expect(styledList.render().prop("data-test")).toBe(dataTest);
  });
  it("should have children", () => {
    children.forEach(node => {
      expect(node.type()).toBe(ListItem);
      expect(
        node
          .find("ListItem")
          .render()
          .prop("data-test"),
      ).toBe(dataTest);
      expect(node.render().text()).toBe(content);
    });
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
