// @flow
import * as React from "react";
import styled from "styled-components";
import { warning } from "@kiwicom/js";

import StarEmpty from "../icons/StarEmpty";
import StarFull from "../icons/StarFull";
import defaultTheme from "../defaultTheme";
import MAX_STARS from "./consts";
import { ICON_COLORS, ICON_SIZES } from "../Icon/consts";
import { DictionaryContext } from "../Dictionary";
import { pureTranslate } from "../Translate";
import { TYPE_OPTIONS } from "../Text/consts";

import type { Props } from "./index";

const StyledRatingStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-shrink: 0;

  svg {
    flex-shrink: 0;
  }
`;

StyledRatingStars.defaultProps = {
  theme: defaultTheme,
};

const RatingStars = ({
  rating,
  size = ICON_SIZES.SMALL,
  dataTest,
  color = ICON_COLORS.PRIMARY,
  showEmpty = false,
}: Props) => {
  warning(
    color !== ICON_COLORS.ATTENTION,
    "Warning: attention color of RatingStars component is deprecated. Please use primary color instead. Check https://orbit.kiwi/roadmap/road-to-1-0-0/#planned-breaking-changes for more information",
  );
  const dictionary = React.useContext(DictionaryContext);
  const ratingRounded = Math.round(rating);
  const starsCount = showEmpty ? MAX_STARS : ratingRounded;
  return (
    <StyledRatingStars
      data-test={dataTest}
      size={size}
      aria-label={pureTranslate(dictionary, "ratingstar_description", {
        number: ratingRounded,
        total: starsCount,
      })}
    >
      {Array(...Array(starsCount)).map((_, index) => {
        const key = `star-${index}`;
        return index <= ratingRounded - 1 ? (
          <StarFull key={key} size={size} color={color} />
        ) : (
          <StarEmpty key={key} size={size} color={color} />
        );
      })}
    </StyledRatingStars>
  );
};

export default RatingStars;
