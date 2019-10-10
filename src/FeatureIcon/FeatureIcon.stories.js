// @flow

import * as React from "react";
import { storiesOf } from "@storybook/react";
import { select, text } from "@storybook/addon-knobs";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from "./index";

storiesOf("FeatureIcon", module).add(
  "Playground",
  () => {
    const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.TICKETFLEXI);
    const dataTest = text("dataTest", "test");
    return <FeatureIcon name={name} dataTest={dataTest} />;
  },
  {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
);
