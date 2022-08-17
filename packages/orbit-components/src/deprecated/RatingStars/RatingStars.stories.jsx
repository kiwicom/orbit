// @flow
import * as React from "react";
import { number, text, select, boolean } from "@storybook/addon-knobs";

import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES } from "../../Icon/consts";
import RenderInRtl from "../../utils/rtl/RenderInRtl";

import RatingStars from ".";

export default {
  title: "RatingStars",
};

export const Playground = (): React.Node => {
  const rating = number("rating", 4.4, { min: 0, max: MAX_STARS });
  const size = select("size", [null, ...Object.values(ICON_SIZES)]);
  const color = select("color", [null, ICON_COLORS.PRIMARY, ICON_COLORS.SECONDARY]);
  const showEmpty = boolean("showEmpty", true);
  const dataTest = text("dataTest", "test");

  return (
    <RatingStars
      rating={rating}
      size={size}
      color={color}
      showEmpty={showEmpty}
      dataTest={dataTest}
    />
  );
};

Playground.story = {
  parameters: {
    info: "Playground of RatingStars",
  },
};

export const Rtl = (): React.Node => (
  <RenderInRtl>
    <RatingStars rating={3.3} />
  </RenderInRtl>
);

Rtl.story = {
  name: "RTL",

  parameters: {
    info: "This is a preview of this component in RTL setup.",
  },
};
