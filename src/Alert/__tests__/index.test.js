// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Alert from "../index";

describe("Alert", () => {
  it("should contain children", () => {
    const message = "Alert message";
    const component = shallow(<Alert>{message}</Alert>);
    expect(
      component
        .find("Alert__Content")
        .children()
        .exists(),
    ).toBe(true);
  });
  it("should be closable", () => {
    const onClose = jest.fn();
    const message = "Alert message";
    const component = shallow(
      <Alert onClose={onClose} closable>
        {message}
      </Alert>,
    );
    const ButtonLink = component.find("Alert__CloseContainer ButtonLink");
    ButtonLink.simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
  it("should match snapshot", () => {
    const message = "Alert message";
    const component = shallow(<Alert>{message}</Alert>);
    expect(component).toMatchSnapshot();
  });
});
