// @flow
import * as React from "react";
import { mount } from "enzyme";

import CarrierLogo from "../";

const carriers = [
  { code: "FR", name: "Ryanair" },
  { code: "TO", name: "Transavia France" },
  { code: "VY", name: "Vueling" },
  { code: "OK", name: "Czech Airlines" },
];

const sizes = ["small", "medium", "large"];

describe("Multiple CarrierLogo", () => {
  const component = mount(<CarrierLogo carriers={carriers} />);
  carriers.map(carrier =>
    it("Should contain an image of carrier", () => {
      expect(component.find(`img[alt="${carrier.name}"]`).prop("alt")).toBe(carrier.name);
    }),
  );
  it("DefaultProp size is set", () => {
    expect(component.prop("size")).toBe("large");
  });
  it("Should contain a div", () => {
    expect(component.find("div").exists()).toBe(true);
  });
  it("Should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});

carriers.map(carrier =>
  sizes.map(size =>
    describe(`Single carrier with name: ${carrier.name} and code: ${carrier.code}`, () => {
      const component = mount(<CarrierLogo carriers={[carrier]} size={size} />);
      it("Should contain an image of carrier", () => {
        expect(component.find(`img[alt="${carrier.name}"]`).prop("alt")).toBe(carrier.name);
      });
      it("Should contain a div", () => {
        expect(component.find("div").exists()).toBe(true);
      });
      it("Should match snapshot", () => {
        expect(component).toMatchSnapshot();
      });
    }),
  ),
);
