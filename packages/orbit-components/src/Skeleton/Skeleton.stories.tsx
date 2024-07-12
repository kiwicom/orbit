import * as React from "react";

import defaultTheme from "../defaultTheme";
import RenderInRtl from "../utils/rtl/RenderInRtl";
import { SPACINGS_AFTER } from "../common/consts";

import Skeleton from ".";

export default {
  title: "Skeleton",
};

enum PRESETS {
  List = "List",
  Image = "Image",
  Card = "Card",
  Button = "Button",
  Text = "Text",
}

export const Default = () => {
  return <Skeleton height="150px" width="500px" />;
};

Default.story = {
  parameters: {
    info: "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = ({
  animate,
  height,
  maxHeight,
  rowBorderRadius,
  rowHeight,
  rowOffset,
  rows,
  spaceAfter,
  viewBox,
  width,
  title,
  color,
}) => {
  return (
    <Skeleton
      animate={animate}
      color={color}
      height={height}
      maxHeight={maxHeight}
      title={title}
      rowBorderRadius={rowBorderRadius}
      rowHeight={rowHeight}
      rowOffset={rowOffset}
      rows={rows}
      spaceAfter={spaceAfter}
      viewBox={viewBox}
      width={width}
    />
  );
};

Playground.story = {
  parameters: {
    info: "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};

Playground.args = {
  animate: true,
  height: "",
  maxHeight: "",
  rowBorderRadius: 3,
  rowHeight: 21,
  rowOffset: 30,
  rows: 10,
  spaceAfter: SPACINGS_AFTER.NONE,
  viewBox: "",
  width: "",
  title: "Loading",
  color: "",
};

Playground.argTypes = {
  spaceAfter: {
    options: Object.values(SPACINGS_AFTER),
    control: {
      type: "select",
    },
  },
  color: {
    options: Object.keys(defaultTheme.orbit).filter(t => t.startsWith("palette")),
    control: {
      type: "select",
    },
  },
};

export const RTL = () => (
  <RenderInRtl>
    <Skeleton height="100px" width="500px" viewBox="0 0 500 100">
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </Skeleton>
  </RenderInRtl>
);

export const Custom = ({ height, viewBox, width }) => {
  return (
    <Skeleton height={height} width={width} viewBox={viewBox}>
      <rect x="48" y="8" rx="3" ry="3" width="88" height="6" />
      <rect x="48" y="26" rx="3" ry="3" width="52" height="6" />
      <rect x="0" y="56" rx="3" ry="3" width="410" height="6" />
      <rect x="0" y="72" rx="3" ry="3" width="380" height="6" />
      <rect x="0" y="88" rx="3" ry="3" width="178" height="6" />
      <circle cx="20" cy="20" r="20" />
    </Skeleton>
  );
};

Custom.args = {
  height: "100px",
  viewBox: "0 0 500 100",
  width: "500px",
};

export const Presets = ({ presets }) => {
  return <Skeleton preset={presets} />;
};

Presets.args = {
  preset: PRESETS.List,
};

Presets.argTypes = {
  preset: {
    options: PRESETS,
    control: {
      type: "select",
    },
  },
};
