// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Stack from "../Stack";

import ButtonMobileStore from ".";

storiesOf("ButtonMobileStore", module).add(
  "Default",
  () => {
    const href = text("href", "https://apps.apple.com/app/kiwi-com-cheap-travel-deals/id657843853");

    return (
      <>
        <Stack flex>
          <ButtonMobileStore onClick={action("clicked")} href={href} type="appStore" />
          <ButtonMobileStore onClick={action("clicked")} href={href} type="googlePlay" />
        </Stack>
      </>
    );
  },
  {
    info: "This is the default configuration of this component.",
  },
);
