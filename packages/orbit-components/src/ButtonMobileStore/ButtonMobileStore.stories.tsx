import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { LANGUAGE } from "./consts";
import Stack from "../Stack";

import ButtonMobileStore from ".";

const meta: Meta<typeof ButtonMobileStore> = {
  title: "ButtonMobileStore",
  component: ButtonMobileStore,

  args: {
    lang: LANGUAGE.EN,
  },

  argTypes: {
    lang: {
      options: Object.values(LANGUAGE),
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMobileStore>;

export const Default: Story = {
  render: ({ lang }) => (
    <Stack flex>
      <ButtonMobileStore
        onClick={action("clicked")}
        href="#"
        lang={lang}
        type="appStore"
        alt="Download on the App Store"
      />
      <ButtonMobileStore
        onClick={action("clicked")}
        href="#"
        lang={lang}
        type="googlePlay"
        alt="Download on the Google Play"
      />
    </Stack>
  ),

  parameters: {
    info: "This is the default configuration of this component.",
    controls: {
      exclude: ["type", "alt", "stopPropagation"],
    },
  },
};
