// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";

import TimelineStep from "./components/TimelineStep";

import Timeline from "./index";

const dataTest = text("dataTest", "test");

storiesOf("Timeline", module)
  .add(
    "Default",
    () => {
      const status = text("status", "success");
      const step = text("step", "In progress");
      const time = text("time", "4th May 10:25");
      const children = text(
        "children",
        "We’ll review your request and apply for any available refund from the carrier(s)",
      );

      return (
        <Timeline dataTest={dataTest}>
          <TimelineStep step="Requested" time="3rd May 14:04" status="success">
            We’ve received your request and will assign it to one of our agents.
          </TimelineStep>
          <TimelineStep step={step} time={time} status={status}>
            {children}
          </TimelineStep>
          <TimelineStep step="Waiting for the carrier" time="5th May 15:03">
            We’ll wait for the carrier(s) to send us the refund and contact them again if necessary.
          </TimelineStep>
          <TimelineStep step="Carrier is refunding" time="6th May 20:50">
            The carrier has sent us a refund. There might be more depending on their policy.
          </TimelineStep>
          <TimelineStep step="Refunded" time="7th May 10:30">
            We’ll forward you all refunds from the carrier(s) after we receive it.
          </TimelineStep>
        </Timeline>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "with warning",
    () => {
      const step = text("step", "Action required");
      const time = text("time", "5th May 15:03");
      const status = text("status", "warning");
      const children = text(
        "children",
        "The carrier has sent us a refund. There might be more depending on their policy",
      );

      return (
        <Timeline dataTest={dataTest}>
          <TimelineStep step="Requested" time="3rd May 14:04" status="success">
            We’ve received your request and will assign it to one of our agents.
          </TimelineStep>
          <TimelineStep step="In progress" time="4th May 10:25" status="success">
            We’ll review your request and apply for any available refund from the carrier(s).
          </TimelineStep>
          <TimelineStep step={step} time={time} status={status}>
            {children}
          </TimelineStep>
          <TimelineStep step="Carrier is refunding" time="6th May 20:50">
            The carrier has sent us a refund. There might be more depending on their policy.
          </TimelineStep>
          <TimelineStep step="Refunded" time="7th May 10:30">
            We’ll forward you all refunds from the carrier(s) after we receive it.
          </TimelineStep>
        </Timeline>
      );
    },
    { info: "This is example of Timeline with warning status" },
  )
  .add(
    "with critical",
    () => {
      const step = text("step", "Non refundable");
      const status = text("status", "critical");
      const time = text("time", "7th May 10:30");
      const children = text("children", "The carrier rejected the refund");

      return (
        <Timeline dataTest={dataTest}>
          <TimelineStep step="Requested" time="3rd May 14:04" status="success">
            We’ve assigned your request to one of our agents.
          </TimelineStep>
          <TimelineStep step="In progress" time="4th May 10:25" status="success">
            We’ve applied for a refund from the carrier(s).
          </TimelineStep>
          <TimelineStep step="Waiting for the carrier" time="5th May 15:03" status="success">
            We’ve applied for a refund from the carrier(s).
          </TimelineStep>
          <TimelineStep step="Carrier is refunding" time="6th May 20:50" status="success">
            The carrier(s) is processing your refund request. We’ll contact them again if necessary.
          </TimelineStep>
          <TimelineStep step={step} time={time} status={status}>
            {children}
          </TimelineStep>
        </Timeline>
      );
    },
    { info: "This is example of Timeline with critical status" },
  );
