// @flow
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import TripSegment from "..";

const UID = ({ children }) => children(id => id);

jest.mock("react-uid", () => ({
  UID,
}));

describe("TripSegment", () => {
  it("should have expected DOM output", async () => {
    const duration = "2h";
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

    render(
      <TripSegment
        arrival={arrival}
        arrivalTime={arrivalTime}
        departure={departure}
        departureTime={departureTime}
        duration={duration}
        onClick={onClick}
        carrier={carrier}
      >
        content
      </TripSegment>,
    );

    screen.getByText(arrival);
    screen.getByText(arrivalTime);
    screen.getByText(departure);
    screen.getByText(departureTime);
    screen.getByText(duration);

    const content = screen.getByText("content");

    expect(content).not.toBeVisible();
    // $FlowFixMe
    userEvent.click(document.querySelector("svg"));
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(content).toBeVisible();
    userEvent.type(screen.getByRole("button", { expanded: true }), "{enter}");
    expect(onClick).toHaveBeenCalledTimes(2);
    await waitFor(() => expect(content).not.toBeVisible());
    userEvent.type(screen.getByRole("button", { expanded: false }), "{space}");
    expect(onClick).toHaveBeenCalledTimes(3);
    expect(content).toBeVisible();
    screen.getByRole("button", { expanded: true });
  });
});
