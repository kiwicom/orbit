// @flow

import * as React from "react";
import { mount } from "enzyme";

import Button from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";
import Airplane from "../../icons/Airplane";

const children = "button";
const onClick = jest.fn();

describe("Button", () => {
  it("should contain a title ", () => {
    const component = mount(
      <ThemeProvider>
        <Button size="normal" type="secondary" onClick={onClick}>
          {children}
        </Button>
      </ThemeProvider>,
    );
    const button = component.find("Button__StyledButton");
    expect(button.render().text()).toBe(children);
  });
  // it("should execute onClick method", () => {
  //   const component = shallow(
  //     <ThemeProvider>
  //       <Button size="normal" onClick={onClick} bordered>
  //         {children}
  //       </Button>
  //     </ThemeProvider>,
  //   );
  //   const button = component.find("Button__StyledButton");
  //   button.simulate("click");
  //   expect(onClick).toHaveBeenCalled();
  // });
  it("should contain SVG", () => {
    const component = mount(
      <ThemeProvider>
        <Button size="normal" icon={<Airplane />} onClick={onClick}>
          {children}
        </Button>
      </ThemeProvider>,
    );
    const button = component.find("Button__StyledButton");
    expect(button.find("svg").exists()).toBe(true);
  });
  it("should match snapshot", () => {
    const component = mount(
      <ThemeProvider>
        <Button size="normal" icon={<Airplane />} onClick={onClick}>
          {children}
        </Button>
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
