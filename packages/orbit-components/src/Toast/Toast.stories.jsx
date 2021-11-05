// @flow
import * as React from "react";
import { text } from "@storybook/addon-knobs";

import * as Icons from "../icons";
import Stack from "../Stack";

import Toast from ".";

export default {
  title: "Toast",
};

export const Default = (): React.Node => {
  const children = text("children", "You’re signed in as johndoe@gmail.com.");

  return (
    <Stack direction="column">
      <Toast iconLeft={<Icons.CheckCircle customColor="white" size="small" />}>{children}</Toast>
    </Stack>
  );
};
