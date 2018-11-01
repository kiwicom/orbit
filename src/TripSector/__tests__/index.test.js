// @flow
import * as React from "react";
import { shallow } from "enzyme";

import TripSegment from "../../TripSegment";
import List from "../../List";
import ListItem from "../../List/ListItem";
import TripDate from "../TripDate";
import TripLayover from "../TripLayover";
import Clock from "../../icons/Clock";
import TripSector from "../";

describe("TripSector", () => {
  const dataTest = "test";

  const component = shallow(
    <TripSector dataTest={dataTest}>
      <TripDate>Tue 9 Oct</TripDate>
      <TripSegment
        arrival="Moscow VKO"
        arrivalTime="13:10"
        departure="London STN"
        departureTime="14:50"
        duration="3h"
        onClick={jest.fn()}
        carrier={{
          code: "FR",
          name: "Rayanair",
        }}
      >
        <List>
          <ListItem>Cheburek</ListItem>
        </List>
      </TripSegment>
      <TripLayover>
        <List type="secondary" size="small">
          <ListItem icon={<Clock />}>1h 10m layover</ListItem>
        </List>
      </TripLayover>
    </TripSector>,
  );

  it("should have data-test", () => {
    expect(component.render().prop("data-test")).toBe(dataTest);
  });
  it("should contain children", () => {
    expect(component.find("TripDate").exists()).toBe(true);
    expect(component.find("TripSegment").exists()).toBe(true);
    expect(component.find("TripLayover").exists()).toBe(true);
  });

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
