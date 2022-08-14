import getSizeToken from "./getSizeToken";
import getPadding from "./getPadding";
import { SIZE_OPTIONS } from "./consts";
import { Size, HeightProps } from "../index.d";
import { Theme } from "../../../defaultTheme";

interface Params {
  width?: string;
  size?: Size;
  theme: Theme;
  iconRight?: boolean;
  contentAlign?: "left" | "center" | "right";
  contentWidth?: string;
  iconLeft?: boolean;
  children?: React.ReactNode;
}

interface Output extends HeightProps {
  width?: string;
  fontWeight: string;
  padding: string;
  contentAlign: "left" | "center" | "right" | "space-between";
  contentWidth: string;
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
