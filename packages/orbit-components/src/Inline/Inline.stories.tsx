import * as React from "react";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import { ALIGNS as ALIGN, JUSTIFY } from "./consts";
import { SPACINGS as SPACING } from "../utils/layout/consts";

import Inline from ".";

const PlaceHolder = ({ height = 50 }) => {
  return <div style={{ width: "50px", height: `${height}px`, background: "grey" }} />;
};

const dataTest = "test";

const TestChildren = () => {
  return (
    <>
      <PlaceHolder />
      <PlaceHolder height={60} />
      <PlaceHolder height={70} />
      <PlaceHolder height={80} />
      <PlaceHolder height={90} />
      <PlaceHolder height={100} />
    </>
  );
};

export default {
  title: "Inline",
};

export const Default = ({ spacing }) => {
  return (
    <Inline spacing={spacing} dataTest={dataTest}>
      <TestChildren />
    </Inline>
  );
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

Default.args = {
  spacing: SPACING.XXXSMALL,
};

Default.argTypes = {
  spacing: {
    options: Object.values(SPACING),
    control: {
      type: "select",
    },
  },
};

export const Playground = ({ as, align, justify, spacing }) => {
  return (
    <Inline as={as} align={align} justify={justify} dataTest={dataTest} spacing={spacing}>
      <TestChildren />
    </Inline>
  );
};

Playground.story = {
  parameters: {
    info: "info: You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  as: "div",
  align: ALIGN.START,
  justify: JUSTIFY.START,
  spacing: SPACING.XXXSMALL,
};

Playground.argTypes = {
  align: {
    options: Object.values(ALIGN),
    control: {
      type: "select",
    },
  },
  justify: {
    options: Object.values(JUSTIFY),
    control: {
      type: "select",
    },
  },
  spacing: {
    options: Object.values(SPACING),
    control: {
      type: "select",
    },
  },
};

export const Rtl = ({ spacing }) => {
  return (
    <RenderInRtl>
      <Inline spacing={spacing} dataTest={dataTest}>
        <TestChildren />
      </Inline>
    </RenderInRtl>
  );
};

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};

Rtl.args = {
  spacing: SPACING.XXXSMALL,
};

Rtl.argTypes = {
  spacing: {
    options: Object.values(SPACING),
    control: {
      type: "select",
    },
  },
};
