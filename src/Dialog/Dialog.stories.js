// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { text, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

import Button from "../Button";
import Illustration from "../Illustration/index";
import { NAMES } from "../Illustration/consts";

import Dialog from "./index";

storiesOf("Dialog", module)
  .add(
    "Default",
    () => {
      const title = text("title", "Log out");
      const description = text("description", "Are you sure you want to log out now?");
      const dataTest = text("dataTest", "test");
      return (
        <Dialog
          title={title}
          description={description}
          dataTest={dataTest}
          primaryAction={<Button type="critical">Log out</Button>}
        />
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  )
  .add(
    "Playground",
    () => {
      const title = text("title", "Log out");
      const description = text("description", "Are you sure you want to log out now?");
      const illustration = select("illustration", NAMES, "NoNotification");
      const dataTest = text("dataTest", "test");
      return (
        <Dialog
          title={title}
          description={description}
          illustration={<Illustration name={illustration} size="extraSmall" />}
          dataTest={dataTest}
          onClose={action("onClose")}
          primaryAction={<Button type="critical">Log out</Button>}
          secondaryAction={<Button type="secondary">Cancel</Button>}
        />
      );
    },
    {
      info: "Visit Orbit.Kiwi for more detailed guidelines.",
    },
  );
