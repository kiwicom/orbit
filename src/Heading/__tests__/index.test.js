// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Heading from "../index";
import ThemeProvider from "../../Theming/ThemeProvider";

const children = "Children title";
const component = shallow(
  <ThemeProvider>
    <Heading>{children}</Heading>
  </ThemeProvider>,
);

describe("Heading with defaultProps", () => {
  // it("should contain children", () => {
  //   expect(
  //     component
  //       .find("Heading__StyledHeading")
  //       .render()
  //       .text(),
  //   ).toBe(children);
  // });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
