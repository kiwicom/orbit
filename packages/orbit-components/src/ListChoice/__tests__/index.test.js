// @flow
import * as React from "react";
import { shallow } from "enzyme";
import { render } from "react-dom";
import { nullthrows } from "@adeira/js";

import ListChoice from "../index";
import Accommodation from "../../icons/Accommodation";

let screen;
const body = nullthrows(document.body, "Expected document to have a body");

beforeEach(() => {
  screen = document.createElement("div");
  body.appendChild(screen);
});

afterEach(() => {
  body.removeChild(screen);
});

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
      disabled
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
    expect(content.find("Heading").children().text()).toBe(title);
    expect(content.find("Text").children().text()).toBe(description);
  });
  it("should render checkbox with checked false", () => {
    expect(component.find("Checkbox").prop("checked")).toBe(true);
  });
  it("should NOT execute onClick method", () => {
    component.simulate("click");
    expect(onClick).not.toHaveBeenCalled();
  });
  it("should execute onClick method", () => {
    component.setProps({ disabled: false });
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
  it("should have role button when not selectable", () => {
    render(
      <ListChoice
        title={title}
        description={description}
        selectable={false}
        icon={<Accommodation />}
        onClick={onClick}
        dataTest={dataTest}
      />,
      screen,
    );

    const listChoice = screen.querySelector(`[data-test="${dataTest}"]`);
    expect(listChoice?.getAttribute("role")).toBe("button");
  });

  it("should have role checkbox when selectable", () => {
    render(
      <ListChoice
        title={title}
        description={description}
        selectable
        selected={false}
        icon={<Accommodation />}
        onClick={onClick}
        dataTest={dataTest}
      />,
      screen,
    );

    const listChoice = screen.querySelector(`[data-test="${dataTest}"]`);
    expect(listChoice?.getAttribute("role")).toBe("checkbox");
    expect(listChoice?.getAttribute("aria-checked")).toBe("false");
  });

  it("should have aria-checked true when selectable and selected", () => {
    render(
      <ListChoice
        title={title}
        description={description}
        selectable
        selected
        icon={<Accommodation />}
        onClick={onClick}
        dataTest={dataTest}
      />,
      screen,
    );

    const listChoice = screen.querySelector(`[data-test="${dataTest}"]`);
    expect(listChoice?.getAttribute("role")).toBe("checkbox");
    expect(listChoice?.getAttribute("aria-checked")).toBe("true");
  });
});
