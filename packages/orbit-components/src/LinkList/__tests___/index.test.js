// @flow
import { mount } from "enzyme";
import * as React from "react";

import LinkList from "..";

describe("#LinkList", () => {
  const wrapper = mount(
    <LinkList direction="row" spacing="XXSmall">
      <div>link</div>
    </LinkList>,
  );

  it("should have children", () => {
    expect(wrapper.contains("link")).toBe(true);
  });

  it("should pass props to Stack", () => {
    expect(wrapper.find("Stack").prop("direction")).toBe("row");
    expect(wrapper.find("Stack").prop("spacing")).toBe("XXSmall");
  });
});
