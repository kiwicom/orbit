// @flow
import getSizeToken from "./getSizeToken";
import getPadding from "./getPadding";
import type { GetCommonProps } from "./getCommonProps";

const getCommonProps: GetCommonProps = ({ width, size, theme, onlyIcon, iconRight, iconLeft }) => {
  return {
    ...getSizeToken({ size, theme }),
    width,
    padding: getPadding({ onlyIcon, iconRight, iconLeft, size, theme }),
    transition: `all ${theme.orbit.durationFast} ease-in-out !important`,
    fontWeight: theme.orbit.fontWeightBold,
  };
};

export default getCommonProps;
