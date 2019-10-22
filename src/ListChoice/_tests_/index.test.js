// @flow
import * as React from "react";
import { shallow } from "enzyme";

import ListChoice from "../index";
import Accommodation from "../../icons/Accommodation";

describe("ListChoice", () => {
  const title = "Choice Title";
  const description = "Further description";
  const dataTest = "test";
  const selected = true;
  const selectable = true;
  const onClick = jest.fn();

  const component = shallow(
    <ListChoice
      title={title}
      description={description}
      selectable={selectable}
      selected={selected}
      icon={<Accommodation />}
      onClick={onClick}
      dataTest={dataTest}
    />,
  );
  const content = component.find("ListChoice__StyledListChoiceContent");
  it("should render icon", () => {
    expect(component.find("Accommodation").exists()).toBe(true);
  });
  it("should render data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should render title and description", () => {
    expect(
      content
        .find("Heading")
        .children()
        .text(),
    ).toBe(title);
    expect(
      content
        .find("Text")
        .children()
        .text(),
    ).toBe(description);
  });
  it("should render checkbox with checked false", () => {
    expect(component.find("Checkbox").prop("checked")).toBe(true);
  });
  it("should execute onClick method", () => {
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
