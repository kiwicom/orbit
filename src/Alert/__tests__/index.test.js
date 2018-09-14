// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Alert from "../index";

const message = "Alert message";

describe("Alert", () => {
  it("should contain children", () => {
    const component = shallow(<Alert>{message}</Alert>);
    expect(
      component
        .find("Alert__Content")
        .children()
        .exists(),
    ).toBe(true);
  });
  it("should have data-test", () => {
    const dataTest = "test";
    const component = shallow(<Alert dataTest={dataTest}>{message}</Alert>);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should be closable", () => {
    const onClose = jest.fn();
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
    const component = shallow(<Alert>{message}</Alert>);
    expect(component).toMatchSnapshot();
  });
});
