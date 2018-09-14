// @flow
import * as React from "react";
import { mount } from "enzyme";

import CarrierLogo from "../index";

const carriers = [
  { code: "FR", name: "Ryanair" },
  { code: "TO", name: "Transavia France" },
  { code: "VY", name: "Vueling" },
  { code: "OK", name: "Czech Airlines" },
];

describe("Multiple CarrierLogo with DefaultProp", () => {
  const dataTest = "test";
  const component = mount(<CarrierLogo carriers={carriers} dataTest={dataTest} />);
  carriers.map(carrier =>
    it("should contain an image of carrier", () => {
      expect(component.find(`img[alt="${carrier.name}"]`).prop("alt")).toBe(carrier.name);
    }),
  );
  it("should contain a div", () => {
    expect(component.find("div").exists()).toBe(true);
  });
  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
