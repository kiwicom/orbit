// @flow
import * as React from "react";
import { shallow } from "enzyme";

import CountryFlag, { getCountryProps } from "../index";
import { CODES } from "../consts";

const code = CODES.ANYWHERE;
const name = "Anywhere";
const dataTest = "test";

describe(`CountryFlag of ${name}`, () => {
  const component = shallow(<CountryFlag code={code} name={name} dataTest={dataTest} />);
  it("should have passed props", () => {
    expect(component.prop("src")).toContain(code);
    expect(component.prop("srcSet")).toContain(code);
    expect(component.prop("alt")).toBe(name);
    expect(component.prop("title")).toBe(name);
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

describe("CountryFlag props", () => {
  it("should support empty code or name", () => {
    expect(getCountryProps()).toEqual({ code: "anywhere", name: "Anywhere" });
    expect(getCountryProps(null, "Country")).toEqual({ code: "anywhere", name: "Country" });
    expect(getCountryProps("US")).toEqual({ code: "us" });
  });

  it("should warn and fallback on unknown code", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    expect(getCountryProps("404", "Country")).toEqual({ code: "anywhere", name: "Country" });
    expect(getCountryProps("unknown")).toEqual({ code: "anywhere", name: "Anywhere" });
    expect(consoleSpy).toHaveBeenCalledTimes(2);
    expect(consoleSpy).toHaveBeenNthCalledWith(1, "Country code not supported: 404");
    expect(consoleSpy).toHaveBeenNthCalledWith(2, "Country code not supported: unknown");
    consoleSpy.mockRestore();
  });
  it("should not warn about null code", () => {
    const consoleSpy = jest.spyOn(console, "warn").mockImplementation(() => {});
    expect(consoleSpy).not.toBeCalled();
    getCountryProps(null);
    getCountryProps();
  });
  it("should support case insensitive code", () => {
    expect(getCountryProps("US")).toEqual({ code: "us" });
    expect(getCountryProps("de")).toEqual({ code: "de" });
  });
  it("should support valid input", () => {
    expect(getCountryProps("fr", "France")).toEqual({ code: "fr", name: "France" });
  });
});
