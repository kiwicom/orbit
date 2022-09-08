import getSizeToken from "./getSizeToken";
import getPadding from "./getPadding";
import { SIZE_OPTIONS } from "./consts";
import { Size, HeightProps, ButtonCommonProps } from "../types";
import { Theme } from "../../../defaultTheme";

export interface Params
  extends Pick<
    ButtonCommonProps,
    "iconRight" | "contentAlign" | "contentWidth" | "iconLeft" | "width" | "iconRight" | "children"
  > {
  size?: Size;
  theme: Theme;
}

export interface Output
  extends HeightProps,
    Pick<ButtonCommonProps, "contentAlign" | "contentWidth" | "width"> {
  fontWeight: string;
  padding: string;
}

const getCommonProps = ({
  width,
  size = SIZE_OPTIONS.NORMAL,
  theme,
  iconRight,
  contentAlign,
  contentWidth,
  iconLeft,
  children,
}: Params): Output => {
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
