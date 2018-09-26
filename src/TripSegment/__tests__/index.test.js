// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Airplane from "../../icons/Airplane";
import TripSegment from "../index";
import List from "../../List";
import ListItem from "../../List/ListItem";

describe(`TripSegment with List as children`, () => {
  const duration = "2h";
  const content = "Some string";
  const toggle = false;
  const onClick = jest.fn();
  const arrivalTime = "11:20";
  const departureTime = "5:30";
  const carrier = {
    code: "FR",
    name: "Rayanair",
    type: "airline",
  };

  const departure = "Berlin TXL";
  const arrival = "Moscow VKO";

  const component = shallow(
    <TripSegment
      arrival={arrival}
      arrivalTime={arrivalTime}
      departure={departure}
      departureTime={departureTime}
      duration={duration}
      onClick={onClick}
      carrier={carrier}
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
    expect(toggledList.prop("toggle")).toBe(toggle);
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
