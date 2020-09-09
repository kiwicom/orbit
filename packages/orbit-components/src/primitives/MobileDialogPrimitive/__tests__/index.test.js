// @flow
import * as React from "react";
import { mount } from "enzyme";

import MobileDialog from "../index";
import Button from "../../../Button";

describe("MobileDialogPrimitive", () => {
  const content = "My text link";
  const tabIndex = "1";
  const dataTest = "test";

  const component = mount(
    <MobileDialog tabIndex={tabIndex} dataTest={dataTest} content={content}>
      <Button>Button</Button>
    </MobileDialog>,
  );

  const dialog = component.find("MobileDialog");
  it("should contain a children", () => {
    expect(dialog.children().exists()).toBe(true);
  });
  it("should have data-test", () => {
    expect(dialog.prop("dataTest")).toBe(dataTest);
  });
  it("should have tabindex", () => {
    expect(dialog.prop("tabIndex")).toBe(tabIndex);
  });
  it("should have tabindex", () => {
    expect(dialog.prop("tabIndex")).toBe(tabIndex);
  });
});
