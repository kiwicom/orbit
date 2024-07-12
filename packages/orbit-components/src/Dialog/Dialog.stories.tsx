import * as React from "react";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import ButtonLink from "../ButtonLink";
import Illustration from "../Illustration";
import { NAMES } from "../Illustration/consts.mts";

import Dialog from ".";

export default {
  title: "Dialog",
};

export const Default = ({ title, description, dataTest }) => {
  return (
    <Dialog
      title={title}
      description={description}
      dataTest={dataTest}
      primaryAction={<Button type="critical">Log out</Button>}
      renderInPortal={false}
    />
  );
};

Default.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  title: "Log out",
  description: "Are you sure you want to log out now?",
  dataTest: "test",
};

export const Playground = ({ title, maxWidth, description, illustration, dataTest }) => {
  return (
    <Dialog
      title={title}
      maxWidth={maxWidth}
      description={description}
      illustration={<Illustration name={illustration} size="small" />}
      dataTest={dataTest}
      onClose={action("onClose")}
      primaryAction={<Button type="critical">Log out</Button>}
      secondaryAction={<ButtonLink type="secondary">Cancel</ButtonLink>}
      renderInPortal={false}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  title: "Log out",
  description: "Are you sure you want to log out now?",
  illustration: "NoNotification",
  dataTest: "test",
  maxWidth: NaN,
};

Playground.argTypes = {
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
};
