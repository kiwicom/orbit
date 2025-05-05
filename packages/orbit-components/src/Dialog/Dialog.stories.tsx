import * as React from "react";
import { action } from "@storybook/addon-actions";
import type { Meta, StoryObj } from "@storybook/react/";

import Button from "../Button";
import ButtonLink from "../ButtonLink";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts.mts";
import type { Name } from "../Illustration/types";

import Dialog from ".";

const meta: Meta<typeof Dialog> = {
  title: "Dialog",
  component: Dialog,

  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    title: "Log out",
    description: "Are you sure you want to log out now?",
    illustration: "NoNotification",
    maxWidth: NaN,
    renderInPortal: false,
    lockScrolling: false,
    onClose: action("onClose"),
    titleAs: "div",
  },

  argTypes: {
    illustration: {
      options: NAMES,
      control: {
        type: "select",
      },
    },
    maxWidth: {
      control: {
        type: "number",
      },
    },
    titleAs: {
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "div"],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

function useDialog() {
  const [open, toggle] = React.useState(true);
  const triggerRef = React.useRef<HTMLButtonElement>(null);
  return {
    Container: ({ children }) => (
      <>
        {open && <div>{children}</div>}
        <Button
          ref={triggerRef}
          onClick={() => toggle(true)}
          aria-expanded={open}
          aria-controls="dialog-id"
        >
          Open
        </Button>
      </>
    ),
    onClose: () => {
      toggle(false);
      action("onClose")();
    },
    triggerRef,
  };
}

export const Default: Story = {
  render: args => {
    const { Container, onClose, triggerRef } = useDialog();

    return (
      <Container>
        <Dialog
          {...args}
          primaryAction={<Button type="critical">Log out</Button>}
          onClose={onClose}
          triggerRef={triggerRef}
          id="dialog-id"
        />
      </Container>
    );
  },

  args: {
    illustration: undefined,
    maxWidth: undefined,
    secondaryAction: undefined,
    lockScrolling: undefined,
  },

  parameters: {
    controls: {
      exclude: [
        "illustration",
        "onClose",
        "renderInPortal",
        "maxWidth",
        "lockScrolling",
        "primaryAction",
        "secondaryAction",
      ],
    },
  },
};

export const Playground: Story = {
  render: ({ illustration, ...args }) => {
    const { Container, onClose, triggerRef } = useDialog();

    return (
      <Container>
        <Dialog
          {...args}
          primaryAction={<Button type="critical">Log out</Button>}
          secondaryAction={<ButtonLink type="secondary">Cancel</ButtonLink>}
          illustration={<Illustration name={illustration as Name} size="small" />}
          onClose={onClose}
          triggerRef={triggerRef}
          id="dialog-id"
        />
      </Container>
    );
  },

  parameters: {
    controls: {
      exclude: ["onClose", "primaryAction", "secondaryAction"],
    },
  },
};
