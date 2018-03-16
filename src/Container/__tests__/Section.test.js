// @flow

import * as React from "react";
import { shallow } from "enzyme";

import Section from "../Section";

describe("Section", () => {
  it("should contain children elements", () => {
    const component = shallow(
      <Section>
        <span>Test</span>
      </Section>,
    );

    expect(component.find(".section")).toHaveLength(1);
    expect(component.find("span")).toHaveLength(1);
  });
});
