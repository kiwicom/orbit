import * as React from "react";

import * as SmartPassIllustrations from ".";

const SIZE_OPTIONS = {
  EXTRASMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  DISPLAY: "display",
};

export const Default = () => {
  return <SmartPassIllustrations.SmartPassV1 />;
};

export const Playground = ({
  size,
  dataTest,
  title,
  description,
  primary,
  secondary,
  ariaLabelledby,
  illustration,
}) => {
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

Playground.args = {
  size: SIZE_OPTIONS.MEDIUM,
  dataTest: "test",
  title: "title",
  description: "description",
  primary: "white",
  secondary: "black",
  ariaLabelledby: "id",
  illustration: "SmartPassV1",
};

Playground.argTypes = {
  size: {
    options: Object.values(SIZE_OPTIONS),
    control: {
      type: "select",
    },
  },
  illustration: {
    options: Object.keys(SmartPassIllustrations),
    control: {
      type: "select",
    },
  },
};

export default {
  title: "SmartPassIllustration",
  component: SmartPassIllustrations,
  includeStories: ["Default", "Playground"],
};
