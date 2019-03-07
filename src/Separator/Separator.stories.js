// @flow
import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select } from "@storybook/addon-knobs";

import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Separator from "./index";

storiesOf("Separator", module)
  .add("Default", () => <Separator />, {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  })
  .add(
    "Playground",
    () => {
      const spaceAfter = select(
        "spaceAfter",
        [undefined, ...Object.values(SPACINGS_AFTER)],
        SPACINGS_AFTER.LARGEST,
      );
      return <Separator spaceAfter={spaceAfter} />;
    },
    {
      info:
        "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
    },
  );
