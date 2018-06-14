// @flow
import * as React from "react";
import { mount } from "enzyme";
import defaultTokens from "@kiwicom/orbit-design-tokens";

import Alert from "../Alert";

describe("Alert", () => {
  it("should contain children", () => {
    const message = "Alert message";
    const component = mount(<Alert theme={defaultTokens}>{message}</Alert>);
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
    const component = mount(<Alert theme={defaultTokens}>{message}</Alert>);
    expect(component).toMatchSnapshot();
  });
});
