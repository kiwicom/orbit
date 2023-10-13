import * as React from "react";
import { select, text } from "@storybook/addon-knobs";

import { NAME_OPTIONS } from "./consts";

import FeatureIcon from ".";

export default {
  title: "FeatureIcon",
};

export const Playground = () => {
  const name = select("Type", Object.values(NAME_OPTIONS), NAME_OPTIONS.TICKETFLEXI);
  const dataTest = text("dataTest", "test");
  return <FeatureIcon name={name} dataTest={dataTest} />;
};

Playground.story = {
  parameters: {
    info: "Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const VisualTest = () => {
  return (
    <div className="space-x-xs flex">
      {Object.values(NAME_OPTIONS).map(name => (
        <FeatureIcon name={name} />
      ))}
    </div>
  );
};

VisualTest.story = {
  parameters: {
    chromatic: { disableSnapshot: false },
  },
};
