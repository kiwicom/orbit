// @flow
import getSizeToken from "./getSizeToken";
import getPadding from "./getPadding";
import type { GetCommonProps } from "./getCommonProps";
import { SIZE_OPTIONS } from "./consts";

const getCommonProps: GetCommonProps = ({
  width,
  size = SIZE_OPTIONS.NORMAL,
  theme,
  iconRight,
  iconLeft,
  children,
}) => {
  const onlyIcon = Boolean(iconLeft && !children);
  return {
    ...getSizeToken(size, theme),
    width,
    padding: getPadding(onlyIcon, iconRight, iconLeft, size, theme),
    fontWeight: theme.orbit.fontWeightMedium,
  };
};

export default getCommonProps;
