// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Button from "../../Button";
import Airplane from "../../icons/Airplane";
import ButtonGroup from "../index";

const children = "button";

describe("ButtonGroup", () => {
  const dataTest = "test";
  const component = shallow(
    <ButtonGroup dataTest={dataTest}>
      <Button type="secondary">{children}</Button>
      <Button icon={<Airplane />}>{children}</Button>
    </ButtonGroup>,
  );
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
});
