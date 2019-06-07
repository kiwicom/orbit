// @flow
import * as React from "react";
import { mount, shallow } from "enzyme";

import CarrierLogo from "../index";
import { SIZE_OPTIONS } from "../consts";

const carriers = [
  { code: "FR", name: "Ryanair" },
  { code: "TO", name: "Transavia France" },
  { code: "VY", name: "Vueling" },
  { code: "OK", name: "Czech Airlines" },
];

describe("CarrierLogo images", () => {
  it("should contains correct image", () => {
    const component = shallow(
      <CarrierLogo carriers={[{ code: "FR", name: "Ryanair" }]} size={SIZE_OPTIONS.LARGE} />,
    );
    expect(
      component
        .render()
        .children()
        .attr("src"),
    ).toContain("//images.kiwi.com/airlines/32/FR.png?default=airline.png");

    expect(
      component
        .render()
        .children()
        .attr("srcset"),
    ).toContain("//images.kiwi.com/airlines/64/FR.png?default=airline.png");
  });
});

describe("CarrierLogo with customSource", () => {
  it("should contains correct image", () => {
    const component = shallow(
      <CarrierLogo
        carriers={[{ code: "LAL.png", name: "LAL" }]}
        customSource={{
          url: "//images.kiwi.com/airlines/32/",
          src: {
            default: "airline.png",
          },
          srcSet: {
            default: "airline.png",
          },
        }}
      />,
    );
    expect(
      component
        .render()
        .children()
        .attr("src"),
    ).toContain("//images.kiwi.com/airlines/32/LAL.png?default=airline.png");

    expect(
      component
        .render()
        .children()
        .attr("srcset"),
    ).toContain("//images.kiwi.com/airlines/32/LAL.png?default=airline.png 2x");
  });
});

describe("CarrierLogo fallback", () => {
  it("should have proper fallback: airline", () => {
    const component = shallow(
      <CarrierLogo carriers={[{ code: "LOL", name: "LOL", type: "airline" }]} />,
    );

    expect(
      component
        .render()
        .children()
        .attr("src"),
    ).toContain("//images.kiwi.com/airlines/32/LOL.png?default=airline.png");
  });

  it("should have proper fallback: bus", () => {
    const component = shallow(
      <CarrierLogo carriers={[{ code: "LOL", name: "LOL", type: "bus" }]} />,
    );

    expect(
      component
        .render()
        .children()
        .attr("src"),
    ).toContain("//images.kiwi.com/airlines/32/LOL.png?default=bus.png");
  });

  it("should have proper fallback: train", () => {
    const component = shallow(
      <CarrierLogo carriers={[{ code: "LOL", name: "LOL", type: "train" }]} />,
    );

    expect(
      component
        .render()
        .children()
        .attr("src"),
    ).toContain("//images.kiwi.com/airlines/32/LOL.png?default=train.png");
  });
});

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
