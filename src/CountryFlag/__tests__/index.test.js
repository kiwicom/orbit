// @flow
import * as React from "react";
import { shallow } from "enzyme";

import CountryFlag from "../index";
import { CODES } from "../consts";

const code = CODES.ANYWHERE;
const name = "Anywhere";

describe(`CountryFlag of ${name}`, () => {
  const component = shallow(<CountryFlag code={code} name={name} />);
  it("should have passed props", () => {
    expect(component.prop("src")).toContain(code);
    expect(component.prop("srcSet")).toContain(code);
    expect(component.prop("alt")).toBe(name);
    expect(component.prop("title")).toBe(name);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
