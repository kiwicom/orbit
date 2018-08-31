// @flow
import * as React from "react";
import { shallow } from "enzyme";

import Airplane from "../../icons/Airplane";
import type { TripType } from "../index";
import TripSegment from "../index";
import List from "../../List";
import ListItem from "../../List/ListItem";

describe(`TripSegment with List as children`, () => {
  const arrivalCity = "Moscow";
  const departureCity = "Berlin";
  const duration = "2h";
  const type: TripType = "airline";
  const departureTime = "11:20";
  const arrivalTime = "14:20";
  const departureCode = "VKO";
  const arrivalCode = "TKL";
  const code = "FR";
  const name = "Rayanair";
  const content = "Some string";
  const onClick = jest.fn();

  const component = shallow(
    <TripSegment
      arrivalCity={arrivalCity}
      arrivalTime={arrivalTime}
      arrivalCode={arrivalCode}
      code={code}
      departureCity={departureCity}
      departureTime={departureTime}
      departureCode={departureCode}
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

  it("should match snapshot", () => {
    expect(component).toMatchSnapshot();
  });
});
