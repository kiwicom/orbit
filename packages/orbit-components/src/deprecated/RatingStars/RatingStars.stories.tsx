import * as React from "react";
import { number, text, select, boolean } from "@storybook/addon-knobs";

<<<<<<< HEAD:packages/orbit-components/src/deprecated/RatingStars/RatingStars.stories.jsx
import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES } from "../../Icon/consts";
import RenderInRtl from "../../utils/rtl/RenderInRtl";
=======
import { MAX_STARS, ICON_COLORS, ICON_SIZES } from "./consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";
>>>>>>> c624db547 (refactor: second bunch of refactoring to ts (#3554)):packages/orbit-components/src/RatingStars/RatingStars.stories.tsx

import RatingStars from ".";

export default {
  title: "RatingStars",
};

export const Playground = () => {
  const rating = number("rating", 4.4, { min: 0, max: MAX_STARS });
  const size = select("size", Object.values(ICON_SIZES), ICON_SIZES.SMALL);
  const color = select("color", Object.values(ICON_COLORS), ICON_COLORS.PRIMARY);
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

export const Rtl = () => (
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
