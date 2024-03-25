import * as React from "react";

import { SPACINGS_AFTER } from "../common/consts";

import Timeline, { TimelineStep } from ".";

const DIRECTIONS = ["row", "column"] as const;
const TYPES = ["success", "warning", "critical", "info", undefined] as const;

export default function TimelineStory() {
  return (
    <div className="p-md">
      {Object.values(SPACINGS_AFTER).map(spaceAfter => (
        <Timeline spaceAfter={spaceAfter}>
          <TimelineStep label="Only one step" />
        </Timeline>
      ))}

      {DIRECTIONS.map(direction => (
        <>
          <Timeline direction={direction}>
            <TimelineStep label="Requested" subLabel="3rd May 14:04" />
            <TimelineStep
              label="In progress (this is quite a long sentence just to see how it plays out)"
              subLabel="4th May 10:25 (this is quite a long sentence just to see how it plays out)"
            />
            <TimelineStep label="Refunded">
              We’ll forward you all refunds from the carrier(s) after we receive it.
            </TimelineStep>
          </Timeline>

          <Timeline direction={direction}>
            <TimelineStep type="success" label="Requested" subLabel="3rd May 14:04">
              We’ve received your request and will assign it to one of our agents.
            </TimelineStep>
            <TimelineStep active type="warning" label="In progress" subLabel="4th May 10:25">
              We’ll review your request and apply for any available refund from the carrier(s)
            </TimelineStep>
            <TimelineStep type="critical" label="Waiting for the carrier" subLabel="5th May 14:04">
              We’ll wait for the carrier(s) to send us the refund and contact them again if
              necessary.
            </TimelineStep>
            <TimelineStep type="info" label="Carrier is refunding" subLabel="6th May 14:04">
              The carrier has sent us a refund. There might be more depending on their policy.
            </TimelineStep>
            <TimelineStep label="Refunded" subLabel="7th May 10:25">
              We’ll forward you all refunds from the carrier(s) after we receive it.
            </TimelineStep>
          </Timeline>

          <Timeline direction={direction}>
            {TYPES.map(type => (
              <TimelineStep type={type} label="Yay" />
            ))}
          </Timeline>

          <Timeline direction={direction}>
            <TimelineStep label="Label only" />
            <TimelineStep label="Label" subLabel="Sublabel" />
            <TimelineStep label="Label">Children</TimelineStep>
            <TimelineStep label="Label" subLabel="Sublabel">
              Children
            </TimelineStep>
          </Timeline>
        </>
      ))}
    </div>
  );
}
