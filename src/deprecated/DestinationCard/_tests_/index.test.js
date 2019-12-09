// @flow
import * as React from "react";
import { shallow } from "enzyme";

import DestinationCard from "../index";

describe("DestinationCard one-way", () => {
  const dataTest = "test";
  const departureCity = "Prague";
  const destinationCity = "Dubai";
  const destinationCountry = "United Arab Emirates";
  const image = "dubai_ae";
  const height = 500;
  const price = "5,563 Kč";
  const onClick = jest.fn();
  const outbound = { text: "One-way", type: "Direct", duration: "6h 10m" };
  const component = shallow(
    <DestinationCard
      dataTest={dataTest}
      departureCity={departureCity}
      destinationCity={destinationCity}
      destinationCountry={destinationCountry}
      image={image}
      height={height}
      price={price}
      outbound={outbound}
      onClick={onClick}
    />,
  );

  const departure = component.find("DestinationCard__StyledDestinationCardHeader");
  const destination = component.find("DestinationCard__StyledDestination");

  it("should have props", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
    expect(component.prop("height")).toBe(height);
  });

  it("should render departure", () => {
    expect(
      departure
        .find("Heading")
        .first()
        .children()
        .text(),
    ).toBe(departureCity);
    expect(departure.find("DestinationCard__ArrowUp").exists()).toBe(true);
  });
  it("should render destination city and country", () => {
    expect(
      destination
        .find("Heading")
        .children()
        .text(),
    ).toBe(destinationCity);
    expect(
      component
        .find("DestinationCard__Shown")
        .find("Heading")
        .at(1)
        .children()
        .text(),
    ).toBe(destinationCountry);
  });
  it("should render price", () => {
    expect(
      component
        .find("DestinationCard__StyledDestinationCardContent")
        .find("Heading")
        .at(3)
        .children()
        .text(),
    ).toBe(price);
  });
  it("should execute onClick method", () => {
    component.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });
});
