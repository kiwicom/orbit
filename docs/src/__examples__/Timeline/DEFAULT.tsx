import React from "react";
import { Timeline, TimelineStep } from "@kiwicom/orbit-components";

export default {
  Example: () => (
    <Timeline>
      <TimelineStep label="Booked" subLabel="January 3, 10:43" type="success">
        You booked the trip and received e-tickets.
      </TimelineStep>
      <TimelineStep label="Checked in" subLabel="May 3, 8:45" type="success">
        You checked in for the trip and received boarding passes
      </TimelineStep>
      <TimelineStep label="Board" subLabel="May 4, 8:15" type="warning">
        Be at your departure gate at least 30 minutes before boarding.
      </TimelineStep>
      <TimelineStep label="Arrive" subLabel="May 4, 11:48">
        Arrive at your destination
      </TimelineStep>
    </Timeline>
  ),
  exampleKnobs: [
    {
      component: "TimelineStep",
      knobs: [
        {
          name: "type",
          type: "select",
          defaultValue: "success",
          options: ["success", "warning", "critical"],
        },
        {
          name: "direction",
          type: "select",
          defaultValue: null,
          options: ["row", "column"],
        },
        {
          name: "label",
          type: "text",
          defaultValue: "Booked",
        },
        {
          name: "asText",
          type: "boolean",
          defaultValue: false,
        },
        {
          name: "subLabel",
          type: "text",
          defaultValue: "January 3, 10:43",
        },
      ],
    },
  ],
};
