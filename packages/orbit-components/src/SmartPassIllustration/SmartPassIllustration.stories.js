// @flow
import React from "react";
import { text, select } from "@storybook/addon-knobs";

import SmartPassIllustration from ".";

const NAMES = ["v1", "v2", "v3", "v4", "v5"];

const SIZE_OPTIONS = {
  EXTRASMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  DISPLAY: "display",
};

export const Default = () => {
  const name = text("name", "v1");

  return <SmartPassIllustration name={name} />;
};

export const Playground = () => {
  const name = select("name", NAMES, NAMES[0]);
  const size = select("sizes", Object.values(SIZE_OPTIONS), SIZE_OPTIONS.MEDIUM);
  const dataTest = text("dataTest", "test");
  const title = text("title", "title");
  const description = text("description", "description");
  const primary = text("primary", "white");
  const secondary = text("secondary", "black");
  const ariaLabelledby = text("ariaLabelledby", "id");

  return (
    <SmartPassIllustration
      primary={primary}
      secondary={secondary}
      name={name}
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
  component: SmartPassIllustration,
  includeStories: ["Default", "Playground"],
};
