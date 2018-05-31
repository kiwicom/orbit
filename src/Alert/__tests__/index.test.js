// @flow
import * as React from "react";
import { shallow, mount } from "enzyme";

import ThemeProvider from "../../Theming/ThemeProvider";
import Alert from "../index";

describe("Alert", () => {
  it("should contain children", () => {
    const message = "Alert message";
    const component = mount(
      <ThemeProvider>
        <Alert>{message}</Alert>
      </ThemeProvider>,
    );
    expect(
      component
        .find("Alert__Content")
        .children()
        .exists(),
    ).toBe(true);
  });
  // it("should be closable", () => {
  //   const onClose = jest.fn();
  //   const message = "Alert message";
  //   const component = mount(
  //     <ThemeProvider>
  //       <Alert onClose={onClose} closable>
  //         {message}
  //       </Alert>
  //     </ThemeProvider>,
  //   );
  //   const alert = component.find("Alert__CloseContainer");
  //   alert.simulate("click");
  //   expect(onClose).toHaveBeenCalled();
  // });
  it("should match snapshot", () => {
    const message = "Alert message";
    const component = shallow(
      <ThemeProvider>
        <Alert>{message}</Alert>
      </ThemeProvider>,
    );
    expect(component).toMatchSnapshot();
  });
});
