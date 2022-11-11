import * as React from "react";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import { LANGUAGE } from "./consts";
import Stack from "../Stack";

import ButtonMobileStore from ".";

export default {
  title: "ButtonMobileStore",
};

export const Default = () => {
  const href = text("href", "#");
  const lang = select("lang", Object.values(LANGUAGE), LANGUAGE.EN);

  return (
    <>
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
    </>
  );
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component.",
  },
};
