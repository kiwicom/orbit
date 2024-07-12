import * as React from "react";
import { action } from "@storybook/addon-actions";

import { LANGUAGE } from "./consts";
import Stack from "../Stack";

import ButtonMobileStore from ".";

export default {
  title: "ButtonMobileStore",
};

export const Default = ({ href, lang }) => {
  return (
    <Stack flex>
      <ButtonMobileStore
        onClick={action("clicked")}
        href={href}
        lang={lang}
        type="appStore"
        alt="Download on the App Store"
      />
      <ButtonMobileStore
        onClick={action("clicked")}
        href={href}
        lang={lang}
        type="googlePlay"
        alt="Download on the Google Play"
      />
    </Stack>
  );
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};

Default.args = {
  href: "#",
  lang: LANGUAGE.EN,
};

Default.argTypes = {
  lang: {
    options: Object.values(LANGUAGE),
    control: {
      type: "select",
    },
  },
};
