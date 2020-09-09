// @flow
import * as React from "react";
import { mount } from "enzyme";

import Tooltip from "../index";
import Airplane from "../../icons/Airplane";

jest.mock("../../hooks/useMediaQuery", () => {
  return () => {
    return {
      isLargeMobile: true,
    };
  };
});

describe("Tooltip", () => {
  const content = "Write some message to the user";
  const component = mount(
    <Tooltip content={content}>
      <Airplane />
    </Tooltip>,
  );
  it("it should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
