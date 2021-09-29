import React from "react";
import { Timeline, TimelineStep } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Timeline>
      <TimelineStep label="Arrive">Arrive at your destination</TimelineStep>
    </Timeline>
  ),
  exampleVariants: [
    {
      name: "Success",
      code: `() => <Timeline><TimelineStep label="Booked" type="success">You booked the trip and received e-tickets.
      </TimelineStep></Timeline>`,
    },
    {
      name: "Warning",
      code: `() => <Timeline><TimelineStep label="Checked in" type="warning">Please check in before your trip.
      </TimelineStep></Timeline>`,
    },
    {
      name: "Critical",
      code: `() => <Timeline><TimelineStep label="Board" type="critical">You need to check in before you can board.
      </TimelineStep></Timeline>`,
    },
  ],
};
