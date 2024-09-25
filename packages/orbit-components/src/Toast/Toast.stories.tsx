import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import Notification from "../icons/Notification";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import { ToastRoot, createToast, createToastPromise } from ".";

enum PLACEMENTS {
  TOP_LEFT = "top-left",
  TOP_CENTER = "top-center",
  TOP_RIGHT = "top-right",
  BOTTOM_LEFT = "bottom-left",
  BOTTOM_CENTER = "bottom-center",
  BOTTOM_RIGHT = "bottom-right",
}

type ToastPropsAndCustomArgs = React.ComponentProps<typeof ToastRoot> & {
  message: string;
};

const meta: Meta<ToastPropsAndCustomArgs> = {
  title: "Toast",
  component: ToastRoot,
};

export default meta;
type Story = StoryObj<ToastPropsAndCustomArgs>;

export const Default: Story = {
  render: ({ message }) => {
    const toast = () => createToast(message, { icon: <Notification /> });

    return (
      <>
        <Button onClick={toast}>Add toast</Button>
        <ToastRoot />
      </>
    );
  },

  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
    controls: {
      exclude: [
        "topOffset",
        "leftOffset",
        "rightOffset",
        "bottomOffset",
        "gutter",
        "dismissTimeout",
        "placement",
      ],
    },
  },

  args: {
    message: "Thank you for feedback",
  },
};

export const WithPromise: Story = {
  render: () => {
    const notify = () => {
      const promise = new Promise((res, rej) => {
        setTimeout(Math.random() > 0.5 ? res : rej, 3000);
      });

      createToastPromise(
        promise,
        {
          loading: "...Loading",
          success: "Freddy Krueger has nightmares about Chuck Norris!",
          error: "Chuck did not come",
        },
        {
          success: {
            icon: <Notification />,
          },
        },
      );
    };

    return (
      <>
        <Button onClick={notify}>Add toast</Button>
        <ToastRoot />
      </>
    );
  },

  parameters: {
    controls: {
      disable: true,
    },
  },
};

export const Playground: Story = {
  render: ({ message, ...args }) => {
    const toast = () => createToast(message, { icon: <Notification /> });

    return (
      <>
        <Button onClick={toast}>Add toast</Button>
        <ToastRoot {...args} />
      </>
    );
  },

  parameters: {
    info: "You can try all possible configurations of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },

  args: {
    message: "Thank you for feedback",
    id: "ID",
    topOffset: 8,
    leftOffset: 8,
    rightOffset: 8,
    bottomOffset: 8,
    gutter: 8,
    dismissTimeout: 5000,
    placement: PLACEMENTS.TOP_CENTER,
  },

  argTypes: {
    placement: {
      options: Object.values(PLACEMENTS),
      control: {
        type: "select",
      },
    },
  },
};

export const RTL: Story = {
  render: ({ message }) => {
    const toast = () => createToast(message, { icon: <Notification /> });

    return (
      <RenderInRtl>
        <>
          <Button onClick={toast}>Add toast</Button>
          <ToastRoot />
        </>
      </RenderInRtl>
    );
  },

  parameters: {
    info: "This is a preview of this component in RTL setup.",
    controls: {
      exclude: [
        "topOffset",
        "leftOffset",
        "rightOffset",
        "bottomOffset",
        "gutter",
        "dismissTimeout",
        "placement",
      ],
    },
  },

  args: {
    message:
      "When the Tooth fairy comes to your house she takes your tooth and gives you money. When Chuck Norris comes to your house he breaks your tooth and takes your money.",
  },
};
