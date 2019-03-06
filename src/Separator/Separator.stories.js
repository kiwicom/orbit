// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { withKnobs, select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Separator from "./index";

storiesOf("Separator", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Default", () => <Separator />)
  .add("Playground", () => {
    const spaceAfter = select(
      "spaceAfter",
      [undefined, ...Object.values(SPACINGS_AFTER)],
      SPACINGS_AFTER.LARGEST,
    );
    return <Separator spaceAfter={spaceAfter} />;
  });
