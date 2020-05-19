// @flow
import * as React from "react";
import { shallow } from "enzyme";

import ButtonPrimitive from "../index";
import { Airplane, ChevronDown } from "../../../icons";

describe("ButtonPrimitive: default", () => {
  const ref = React.createRef();
  const dataTest = "test";
  const ariaControls = "ID";
  const ariaExpanded = false;
  const title = "title";
  const tabIndex = "2";
  const children = "Lorem ipsum dolor sit amet";
  const onClick = jest.fn();
  const component = shallow(
    <ButtonPrimitive
      ref={ref}
      dataTest={dataTest}
      ariaControls={ariaControls}
      ariaExpanded={ariaExpanded}
      title={title}
      tabIndex={tabIndex}
      asComponent={props => <span {...props} />}
      onClick={onClick}
      disabled
    >
      {children}
    </ButtonPrimitive>,
  );
  it("should have proper DOM structure", () => {
    expect(component.find("ButtonPrimitive__StyledButtonPrimitive").exists()).toBe(true);
    expect(component.find("ButtonPrimitiveContent").exists()).toBe(true);
    expect(component.find("ButtonPrimitiveContentChildren").exists()).toBe(true);
  });
  it("should have proper DOM rendered attributes", () => {
    const primitive = component.find("ButtonPrimitive__StyledButtonPrimitive").render();
    const content = component.find("ButtonPrimitiveContentChildren");
    expect(primitive.prop("data-test")).toBe(dataTest);
    expect(primitive.prop("aria-controls")).toBe(ariaControls);
    expect(primitive.prop("aria-expanded")).toBe(String(ariaExpanded));
    expect(primitive.prop("aria-label")).toBe(title);
    expect(primitive.prop("disabled")).toBeDefined();
    expect(primitive.prop("tabindex")).toBe(tabIndex);
    expect(primitive.prop("name")).toBe("span");
    expect(content.render().text()).toBe(children);
  });
  it("should have ref", () => {
    expect(ref.current).toBeDefined();
  });
});

describe("ButtonPrimitive: loading and disabled", () => {
  const component = shallow(
    <ButtonPrimitive loading disabled>
      Lorem ipsum
    </ButtonPrimitive>,
  );
  it("should have Loading in the proper DOM structure", () => {
    expect(component.find("Loading").exists()).toBe(true);
  });
});

describe("ButtonPrimitive: with href", () => {
  const href = "#";
  const role = "button";
  const spaceAfter = "largest";
  const component = shallow(
    <ButtonPrimitive
      href={href}
      external
      role={role}
      spaceAfter={spaceAfter}
      iconLeft={<Airplane />}
      iconRight={<ChevronDown />}
    >
      Lorem ipsum
    </ButtonPrimitive>,
  );
  it("should contain icons", () => {
    const button = component.find("ButtonPrimitive__StyledButtonPrimitive");
    expect(button.find("Airplane").exists()).toBe(true);
    expect(button.find("ChevronDown").exists()).toBe(true);
  });
});
