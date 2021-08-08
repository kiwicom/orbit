// @flow
import * as React from "react";
import { select, number, text, boolean } from "@storybook/addon-knobs";

import RenderInRtl from "../utils/rtl/RenderInRtl";
import SPACINGS_AFTER from "../common/getSpacingToken/consts";

import Skeleton from ".";

export default {
  title: "Skeleton",
};

const COLORS = [
  "blueDark",
  "blueDarkActive",
  "blueDarker",
  "blueDarkHover",
  "blueLight",
  "blueLightActive",
  "blueLightHover",
  "blueNormal",
  "blueNormalActive",
  "blueNormalHover",
  "cloudDark",
  "cloudLight",
  "cloudLightActive",
  "cloudLightHover",
  "cloudNormal",
  "cloudNormalActive",
  "cloudNormalHover",
  "greenDark",
  "greenDarkActive",
  "greenDarker",
  "greenDarkHover",
  "greenLight",
  "greenLightActive",
  "greenLightHover",
  "greenNormal",
  "greenNormalActive",
  "greenNormalHover",
  "inkLight",
  "inkLightActive",
  "inkLighter",
  "inkLighterActive",
  "inkLighterHover",
  "inkLightHover",
  "inkNormal",
  "inkNormalActive",
  "inkNormalHover",
  "orangeDark",
  "orangeDarkActive",
  "orangeDarker",
  "orangeDarkHover",
  "orangeLight",
  "orangeLightActive",
  "orangeLightHover",
  "orangeNormal",
  "orangeNormalActive",
  "orangeNormalHover",
  "productDark",
  "productDarkActive",
  "productDarker",
  "productDarkHover",
  "productLight",
  "productLightActive",
  "productLightHover",
  "productNormal",
  "productNormalActive",
  "productNormalHover",
  "redDark",
  "redDarkActive",
  "redDarker",
  "redDarkHover",
  "redLight",
  "redLightActive",
  "redLightHover",
  "redNormal",
  "redNormalActive",
  "redNormalHover",
  "socialFacebook",
  "socialFacebookActive",
  "socialFacebookHover",
  "white",
  "whiteActive",
  "whiteHover",
];

export const Default = (): React.Node => <Skeleton />;

Default.story = {
  parameters: {
    info:
      "This is the default configuration of this component. Visit Orbit.Kiwi for more detailed guidelines.",
  },
};

export const Playground = (): React.Node => {
  const spaceAfter = select("spaceAfter", Object.values(SPACINGS_AFTER), SPACINGS_AFTER.NONE);
  const rows = number("rows", 10);
  const rowOffset = number("rowOffset", 25);
  const rowHeight = number("rowHeight", 15);
  const viewBox = text("viewBox", "");
  const backgroundColor = select("backgroundColor", COLORS, "cloudNormal");
  const foregroundColor = select("foregroundColor", COLORS, "cloudDark");
  const backgroundOpacity = number("backgroundOpacity", 1);
  const foregroundOpacity = number("foregroundOpacity", 1);
  const animate = boolean("animate", true);
  const animationSpeed = number("animationSpeed", 2);
  const animationInterval = number("animationInterval", 0.2);
  const gradientRatio = number("gradientRatio", 2);
  const height = number("height", undefined);
  const width = number("width", undefined);

  return (
    <Skeleton
      animate={animate}
      animationInterval={animationInterval}
      animationSpeed={animationSpeed}
      backgroundColor={backgroundColor}
      backgroundOpacity={backgroundOpacity}
      foregroundColor={foregroundColor}
      foregroundOpacity={foregroundOpacity}
      gradientRatio={gradientRatio}
      height={height}
      rowHeight={rowHeight}
      rowOffset={rowOffset}
      rows={rows}
      spaceAfter={spaceAfter}
      viewBox={viewBox}
      width={width}
    />
  );
};

export const RTL = (): React.Node => (
  <RenderInRtl>
    <Skeleton rows={10} rowOffset={20} />
  </RenderInRtl>
);

export const Custom = (): React.Node => {
  const height = number("height", 100);
  const width = number("width", undefined);
  const viewBox = text("viewBox", "");

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

Playground.story = {
  parameters: {
    info:
      "You can try all possible configurations of this component. However, check Orbit.Kiwi for more detailed design guidelines.",
  },
};
