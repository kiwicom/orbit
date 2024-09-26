import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react";

import { SPACINGS_AFTER } from "../common/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { Type as Types } from "./TimelineStep/consts";
import Button from "../Button";
import Modal, { ModalSection } from "../Modal";
import TimelineStep from "./TimelineStep";

import Timeline from ".";

function useModal() {
  const [open, setOpen] = React.useState(true);
  return {
    Container: ({ children }) => (
      <>
        <div style={{ display: open ? "block" : "none" }}>{children}</div>
        <Button onClick={() => setOpen(true)}>Open</Button>
      </>
    ),
    onClose: () => {
      setOpen(false);
      action("onClose")();
    },
  };
}

type ToastPropsAndCustomArgs = React.ComponentProps<typeof Timeline> &
  React.ComponentProps<typeof TimelineStep>;

const meta: Meta<ToastPropsAndCustomArgs> = {
  title: "Timeline",
  component: Timeline,
};

export default meta;
type Story = StoryObj<ToastPropsAndCustomArgs>;

export const Default: Story = {
  render: () => (
    <Timeline>
      <TimelineStep label="Waiting for your passport or ID details" />
      <TimelineStep label="Waiting for check-in" />
      <TimelineStep label="Processing check-in" />
      <TimelineStep label="Boarding pass ready" />
    </Timeline>
  ),

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      disable: true,
    },
  },
};

export const InsideModal: Story = {
  render: () => {
    const { Container, onClose } = useModal();

    return (
      <Container>
        <Modal onClose={onClose} lockScrolling={false}>
          <ModalSection>
            <Timeline>
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
                The carrier(s) is processing your refund request. We’ll contact them again if
                necessary.
              </TimelineStep>
              <TimelineStep label="Refunded" subLabel="8th May 15:30" type="success">
                We’ll forward you all refunds from the carrier(s) after we receive it.
              </TimelineStep>
            </Timeline>
          </ModalSection>
        </Modal>
      </Container>
    );
  },

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ children, label, subLabel, type, active, ...args }) => (
    <Timeline {...args}>
      <TimelineStep label="Requested" subLabel="3rd May 14:04" type="success">
        We’ve received your request and will assign it to one of our agents.
      </TimelineStep>
      <TimelineStep label="In progress" subLabel="4th May 10:25" type="success">
        We’ll review your request and apply for any available refund from the carrier(s).
      </TimelineStep>
      <TimelineStep label={label} subLabel={subLabel} type={type} active={active}>
        {children}
      </TimelineStep>
      <TimelineStep label="Carrier is refunding" subLabel="6th May 20:50">
        The carrier has sent us a refund. There might be more depending on their policy.
      </TimelineStep>
      <TimelineStep label="Refunded" subLabel="7th May 10:30">
        We’ll forward you all refunds from the carrier(s) after we receive it.
      </TimelineStep>
    </Timeline>
  ),

  parameters: {
    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    children: "We’ve applied for a refund from the carrier(s).",
    label: "Waiting for the carrier",
    subLabel: "5th May 15:03",
    type: Types.Success,
    active: true,
    spaceAfter: "medium",
    direction: "row",
    id: "ID",
  },

  argTypes: {
    spaceAfter: {
      table: { category: "Timeline" },
      options: Object.values(SPACINGS_AFTER),
      control: {
        type: "select",
      },
    },
    direction: {
      table: { category: "Timeline" },
      options: ["row", "column"],
      control: {
        type: "select",
      },
    },
    id: { table: { category: "Timeline" } },
    children: { table: { category: "TimelineStep" } },
    label: { table: { category: "TimelineStep" } },
    subLabel: { table: { category: "TimelineStep" } },
    type: {
      table: { category: "TimelineStep" },
      options: ["info", ...Object.values(Types)],
      control: {
        type: "select",
      },
    },
    active: { table: { category: "TimelineStep" } },
  },
};

export const Rtl: Story = {
  render: () => (
    <RenderInRtl>
      <Timeline>
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
  ),

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      disable: true,
    },
  },
};
