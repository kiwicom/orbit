import * as React from "react";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from ".";

export default {
  title: "FeatureIcon",
};

export const Playground = ({ name, dataTest }) => {
  return <FeatureIcon name={name} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Playground.args = {
  name: NAME_OPTIONS.TICKETFLEXI,
  dataTest: "test",
};

Playground.argTypes = {
  name: {
    options: Object.values(NAME_OPTIONS),
    control: {
      type: "select",
    },
  },
};
