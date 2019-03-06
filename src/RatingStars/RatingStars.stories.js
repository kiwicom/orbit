// @flow
import * as React from "react";
import { storiesOf, setAddon } from "@storybook/react";
import styles from "@sambego/storybook-styles";
import { withKnobs, number, text, select, boolean } from "@storybook/addon-knobs";

import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES } from "../Icon/consts";
import RenderInRtl from "../utils/rtl/RenderInRtl";

import RatingStars from "./";

storiesOf("RatingStars", module)
  .addDecorator(withKnobs)
  .addDecorator(
    styles({
      padding: "20px",
    }),
  )
  .add("Playground", () => {
    const rating = number("rating", 4.4, { min: 0, max: MAX_STARS });
    const size = select("size", [undefined, ...Object.values(ICON_SIZES)]);
    const color = select("color", [
      undefined,
      ICON_COLORS.PRIMARY,
      ICON_COLORS.SECONDARY,
      ICON_COLORS.ATTENTION,
    ]);
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
  })
  .add("RTL", () => (
    <RenderInRtl>
      <RatingStars rating={3.3} />
    </RenderInRtl>
  ));
