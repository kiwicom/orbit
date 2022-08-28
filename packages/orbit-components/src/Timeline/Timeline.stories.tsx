import * as React from "react";
import { text, select, boolean } from "@storybook/addon-knobs";

import { Type as Types } from "./TimelineStep/consts";
import Modal, { ModalSection } from "../Modal";
import TimelineStep from "./TimelineStep";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import Timeline from ".";

const dataTest = text("dataTest", "test");

export default {
  title: "Timeline",
};

export const Default = () => {
  const asText = boolean("asText", false);
  const type = select("type", Object.values(Types), Types.Success);
  const label = text("label", "In progress");
  const time = text("time", "4th May 10:25");
  const direction = select("direction", ["row", "column"], undefined);
  const children = text(
    "children",
    "We’ll review your request and apply for any available refund from the carrier(s)",
  );

  return (
    <Timeline dataTest={dataTest} direction={direction}>
      <TimelineStep asText={asText} label="Requested" subLabel="3rd May 14:04" type="success">
        We’ve received your request and will assign it to one of our agents.
      </TimelineStep>
      <TimelineStep asText={asText} label={label} subLabel={time} type={type}>
        {children}
      </TimelineStep>
      <TimelineStep asText={asText} label="Waiting for the carrier" subLabel="5th May 15:03">
        We’ll wait for the carrier(s) to send us the refund and contact them again if necessary.
      </TimelineStep>
      <TimelineStep asText={asText} label="Carrier is refunding" subLabel="6th May 20:50">
        The carrier has sent us a refund. There might be more depending on their policy.
      </TimelineStep>
      <TimelineStep asText={asText} label="Refunded" subLabel="7th May 10:30">
        We’ll forward you all refunds from the carrier(s) after we receive it.
      </TimelineStep>
    </Timeline>
  );
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

export const WithWarning = () => {
  const label = text("label", "Action required");
  const time = text("time", "5th May 15:03");
  const type = select("type", Object.values(Types), Types.Success);
  const children = text(
    "children",
    "The carrier has sent us a refund. There might be more depending on their policy",
  );

  return (
    <Timeline dataTest={dataTest}>
      <TimelineStep label="Requested" subLabel="3rd May 14:04" type="success">
        We’ve received your request and will assign it to one of our agents.
      </TimelineStep>
      <TimelineStep label="In progress" subLabel="4th May 10:25" type="success">
        We’ll review your request and apply for any available refund from the carrier(s).
      </TimelineStep>
      <TimelineStep label={label} subLabel={time} type={type}>
        {children}
      </TimelineStep>
      <TimelineStep label="Carrier is refunding" subLabel="6th May 20:50">
        The carrier has sent us a refund. There might be more depending on their policy.
      </TimelineStep>
      <TimelineStep label="Refunded" subLabel="7th May 10:30">
        We’ll forward you all refunds from the carrier(s) after we receive it.
      </TimelineStep>
    </Timeline>
  );
};

WithWarning.story = {
  name: "with warning",
  parameters: { info: "This is example of Timeline with warning type" },
};

export const WithCritical = () => {
  const label = text("label", "Non refundable");
  const type = select("type", Object.values(Types), Types.Success);
  const time = text("time", "7th May 10:30");
  const children = text("children", "The carrier rejected the refund");

  return (
    <Timeline dataTest={dataTest}>
      <TimelineStep label="Requested" subLabel="3rd May 14:04" type="success">
        We’ve assigned your request to one of our agents.
      </TimelineStep>
      <TimelineStep label="In progress" subLabel="4th May 10:25" type="success">
        We’ve applied for a refund from the carrier(s).
      </TimelineStep>
      <TimelineStep label="Waiting for the carrier" subLabel="5th May 15:03" type="success">
        We’ve applied for a refund from the carrier(s).
      </TimelineStep>
      <TimelineStep label="Carrier is refunding" subLabel="6th May 20:50" type="success">
        The carrier(s) is processing your refund request. We’ll contact them again if necessary.
      </TimelineStep>
      <TimelineStep label={label} subLabel={time} type={type}>
        {children}
      </TimelineStep>
    </Timeline>
  );
};

WithCritical.story = {
  name: "with critical",
  parameters: { info: "This is example of Timeline with critical type" },
};

export const InsideModal = () => {
  return (
    <Modal>
      <ModalSection>
        <Timeline dataTest={dataTest}>
          <TimelineStep label="Requested" subLabel="3rd May 14:04" type="success">
            We’ve assigned your request to one of our agents.
          </TimelineStep>
          <TimelineStep label="In progress" subLabel="4th May 10:25" type="success">
            We’ve applied for a refund from the carrier(s).
          </TimelineStep>
          <TimelineStep label="Waiting for the carrier" subLabel="5th May 15:03" type="success">
            We’ve applied for a refund from the carrier(s).
          </TimelineStep>
          <TimelineStep label="Carrier is refunding" subLabel="6th May 20:50" type="success">
            The carrier(s) is processing your refund request. We’ll contact them again if necessary.
          </TimelineStep>
          <TimelineStep label="Refunded" subLabel="8th May 15:30" type="success">
            We’ll forward you all refunds from the carrier(s) after we receive it.
          </TimelineStep>
        </Timeline>
      </ModalSection>
    </Modal>
  );
};

InsideModal.story = {
  name: "inside Modal",
};

export const Rtl = () => {
  return (
    <RenderInRtl>
      <Timeline dataTest={dataTest}>
        <TimelineStep label="Requested" subLabel="3rd May 14:04" type="success">
          We’ve assigned your request to one of our agents.
        </TimelineStep>
        <TimelineStep label="In progress" subLabel="4th May 10:25" type="success">
          We’ve applied for a refund from the carrier(s).
        </TimelineStep>
        <TimelineStep label="Waiting for the carrier" subLabel="5th May 15:03" type="success">
          We’ve applied for a refund from the carrier(s).
        </TimelineStep>
        <TimelineStep label="Carrier is refunding" subLabel="6th May 20:50" type="success">
          The carrier(s) is processing your refund request. We’ll contact them again if necessary.
        </TimelineStep>
        <TimelineStep label="Refunded" subLabel="8th May 15:30" type="success">
          We’ll forward you all refunds from the carrier(s) after we receive it.
        </TimelineStep>
      </Timeline>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",
};
