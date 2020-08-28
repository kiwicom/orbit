// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";

import ButtonMobileStore from ".";

storiesOf("ButtonMobileStore", module)
  .add(
    "Default",
    () => {
      const href = text("href", "#");

      return (
        <>
          <Stack flex>
            <ButtonMobileStore
              onClick={action("clicked")}
              href={href}
              type="appStore"
              alt="Download on the App Store"
            />
            <ButtonMobileStore
              onClick={action("clicked")}
              href={href}
              type="googlePlay"
              alt="Download on the Google Play"
            />
          </Stack>
        </>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  )
  .add(
    "Light",
    () => {
      const href = text("href", "#");

      return (
        <>
          <Stack flex>
            <ButtonMobileStore
              onClick={action("clicked")}
              href={href}
              type="appStore"
              variant="light"
              alt="Download on the App Store"
            />
            <ButtonMobileStore
              onClick={action("clicked")}
              href={href}
              type="googlePlay"
              variant="light"
              alt="Download on the Google Play"
            />
          </Stack>
        </>
      );
    },
    {
      info: "This is the default configuration of this component.",
    },
  );
