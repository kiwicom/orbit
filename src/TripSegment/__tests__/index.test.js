// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Airplane from "../../icons/Airplane";
import type { TripType } from "../index";
import TripSegment from "../index";
import List from "../../List";
import ListItem from "../../List/ListItem";

describe(`TripSegment with List as children`, () => {
  const duration = "2h";
  const type: TripType = "airline";
  const content = "Some string";
  const shown = false;
  const onClick = jest.fn();
  const arrivalTime = "11:20";
  const departureTime = "5:30";
  const carrier = {
    code: "FR",
    name: "Rayanair",
  };

  const departure = {
    city: "Berlin",
    code: "VKO",
  };

  const arrival = {
    city: "Moscow",
    code: "TKL",
  };

  const component = shallow(
    <TripSegment
      arrival={arrival}
      arrivalTime={arrivalTime}
      departure={departure}
      departureTime={departureTime}
      duration={duration}
      onClick={onClick}
      carrier={carrier}
      type={type}
    >
      <List>
        <ListItem icon={<Airplane color="secondary" />}>{content}</ListItem>
        <ListItem icon={<Airplane color="secondary" />}>{content}</ListItem>
        <ListItem icon={<Airplane color="secondary" />}>{content}</ListItem>
      </List>
    </TripSegment>,
  );

  const componentName = "TripSegment__";

  const toggledList = component.find(`${componentName}ChildrenWrapper`);
  const wrapperInner = component.find(`${componentName}WrapperInner`);
  const carrierWrapper = component.find(`${componentName}WrapperCarrier`);

  const carrierLogo = carrierWrapper.find("CarrierLogo");
  const flightDuration = carrierWrapper.find("Text");

  it("should have passed props", () => {
    expect(toggledList.prop("shown")).toBe(shown);
    expect(carrierLogo.exists()).toBe(true);
    expect(flightDuration.exists()).toBe(true);
  });

  it("should be stateful", () => {
    const node = component.instance();
    node.setState({ shown: true });
    expect(component.state("shown")).toBe(true);
  });

  it("should execute onClick method", () => {
    wrapperInner.simulate("click");
    expect(onClick).toHaveBeenCalled();
  });

  it("children should have list", () => {
    expect(toggledList.find("List").exists()).toBe(true);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
