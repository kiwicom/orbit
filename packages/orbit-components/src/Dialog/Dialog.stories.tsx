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
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

function useDialog() {
  const [open, toggle] = React.useState(true);
  return {
    Container: ({ children }) => (
      <>
        {open && <div>{children}</div>}
        <Button onClick={() => toggle(true)}>Open</Button>
      </>
    ),
    onClose: () => {
      toggle(false);
      action("onClose")();
    },
  };
}

export const Default: Story = {
  render: args => {
    const { Container, onClose } = useDialog();

    return (
      <Container>
        <Dialog
          {...args}
          primaryAction={<Button type="critical">Log out</Button>}
          onClose={onClose}
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
    const { Container, onClose } = useDialog();

    return (
      <Container>
        <Dialog
          {...args}
          primaryAction={<Button type="critical">Log out</Button>}
          secondaryAction={<ButtonLink type="secondary">Cancel</ButtonLink>}
          illustration={<Illustration name={illustration as Name} size="small" />}
          onClose={onClose}
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
