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
    title: "",
  },

  argTypes: {
    lang: {
      options: Object.values(LANGUAGE),
      control: {
        type: "select",
      },
    },
    title: {
      control: {
        type: "text",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonMobileStore>;

export const Default: Story = {
  render: ({ lang, title }) => (
    <Stack flex>
      <ButtonMobileStore
        onClick={action("clicked")}
        href="#"
        lang={lang}
        type="appStore"
        alt="Download on the App Store"
        title={title}
      />
      <ButtonMobileStore
        onClick={action("clicked")}
        href="#"
        lang={lang}
        type="googlePlay"
        alt="Download on the Google Play"
        title={title}
      />
    </Stack>
  ),

  parameters: {
    info: "This is the default configuration of this component.",
    controls: {
      exclude: ["type", "alt", "onClick", "href", "stopPropagation"],
    },
  },
};
