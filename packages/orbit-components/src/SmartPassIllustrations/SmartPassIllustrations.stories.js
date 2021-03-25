// @flow
import * as React from "react";
import { text, select } from "@storybook/addon-knobs";

import * as SmartPassIllustrations from ".";

const SIZE_OPTIONS = {
  EXTRASMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  DISPLAY: "display",
};

export const Default = (): React.Node => {
  return <SmartPassIllustrations.SmartPassV1 />;
};

export const Playground = (): React.Node => {
  const size = select("sizes", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const dataTest = text("dataTest", "test");
  const title = text("title", "title");
  const description = text("description", "description");
  const primary = text("primary", "white");
  const secondary = text("secondary", "black");
  const ariaLabelledby = text("ariaLabelledby", "id");
  const illustration = select("illustration", Object.keys(SmartPassIllustrations), "SmartPassV1");

  const Component = SmartPassIllustrations[illustration];

  return (
    <Component
      primary={primary}
      secondary={secondary}
      size={size}
      dataTest={dataTest}
      title={title}
      ariaLabelledby={ariaLabelledby}
      description={description}
    />
  );
};

export default {
  title: "SmartPassIllustration",
  component: SmartPassIllustrations,
  includeStories: ["Default", "Playground"],
};
