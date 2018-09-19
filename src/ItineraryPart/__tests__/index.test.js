// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Itinerary from "../index";
import TripSegment from "../../TripSegment";
import List from "../../List";
import ListItem from "../../List/ListItem";
import type { TripType } from "../../TripSegment";
import type { ItineraryDate } from "../index";

describe(`ItineraryPart which contains TripSegment`, () => {
  const duration = "2h";
  const type: TripType = "airline";
  const onClick = jest.fn();
  const date: ItineraryDate = "Fri 28 Sep";
  const arrivalTime = "11:20";
  const departureTime = "5:30";
  const content = "Some string";
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
    <Itinerary date={date}>
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
          <ListItem>{content}</ListItem>
        </List>
      </TripSegment>
    </Itinerary>,
  );

  const COMPONENT = "ItineraryPart__";
  const calendar = component.find(`${COMPONENT}Wrapper`).find(`${COMPONENT}ItineraryDate`);

  it("should contain", () => {
    expect(component.find("TripSegment").exists()).toBe(true);
    expect(calendar.exists()).toBe(true);
  });
  it("TripSegment should contain children", () => {
    expect(component.find("TripSegment").children().length).toBeGreaterThan(0);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
