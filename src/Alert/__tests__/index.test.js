// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Alert from "../index";

describe("Rendered with children", () => {
  it("Should contain message", () => {
    const message = "Alert message";
    const component = shallow(<Alert>{message}</Alert>);
    expect(component).toMatchSnapshot();
  });
});

describe("Called when the closable button is clicked", () => {
  it("Should call onClose function", () => {
    const onClose = jest.fn();
    const message = "Alert message";
    const component = shallow(
      <Alert onClose={onClose} closable>
        {message}
      </Alert>,
    );
    component
      .find(".alertClose")
      .children()
      .simulate("click");
    expect(onClose).toHaveBeenCalled();
  });
});
