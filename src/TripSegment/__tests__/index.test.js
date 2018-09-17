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
  const code = "FR";
  const name = "Rayanair";
  const content = "Some string";
  const shown = false;
  const onClick = jest.fn();

  const departure = {
    city: "Berlin",
    code: "VKO",
    time: "11:20",
  };

  const arrival = {
    city: "Moscow",
    code: "TKL",
    time: "14:20",
  };

  const component = shallow(
    <TripSegment
      arrival={arrival}
      departure={departure}
      code={code}
      duration={duration}
      onClick={onClick}
      type={type}
      name={name}
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
