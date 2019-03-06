// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Separator from "./index";

storiesOf("Separator", module)
  .add("Default", () => <Separator />)
  .add("Playground", () => {
    const spaceAfter = select(
      "spaceAfter",
      [undefined, ...Object.values(SPACINGS_AFTER)],
      SPACINGS_AFTER.LARGEST,
    );
    return <Separator spaceAfter={spaceAfter} />;
  });
