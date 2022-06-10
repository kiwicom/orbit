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
  contentAlign,
  contentWidth,
  iconLeft,
  children,
}) => {
  const onlyIcon = Boolean((iconLeft || iconRight) && !children);
  const hasCenteredContent = Boolean(onlyIcon || (children && !(iconLeft || iconRight)));

  return {
    ...getSizeToken(size, theme),
    width,
    padding: getPadding(onlyIcon, iconRight, iconLeft, size, theme),
    fontWeight: theme.orbit.fontWeightMedium,
    contentAlign: contentAlign || (onlyIcon || hasCenteredContent ? "center" : "space-between"),
    contentWidth: contentWidth || "100%",
  };
};

export default getCommonProps;
