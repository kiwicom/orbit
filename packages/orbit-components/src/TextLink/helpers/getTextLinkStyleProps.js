// @flow
import { SIZE_OPTIONS, TYPE_OPTIONS } from "../consts";
import getTextLinkColor from "./getTextLinkColor";
import type { GetTextLinkStyleProps } from "./getTextLinkStyleProps";

// theme.orbit.widthIconSmall
const getSizeToken = ({ theme, size }) => {
  const sizeTokens = {
    [SIZE_OPTIONS.LARGE]: theme.orbit.fontSizeTextLarge,
    [SIZE_OPTIONS.NORMAL]: theme.orbit.fontSizeTextNormal,
    [SIZE_OPTIONS.SMALL]: theme.orbit.fontSizeTextSmall,
  };
  return size && sizeTokens[size];
};

const getDefaultForeground = props => {
  const defaultForeground = getTextLinkColor(props);
  return {
    foreground: defaultForeground,
    foregroundLink: defaultForeground,
    foregroundVisited: defaultForeground,
  };
};

const getTextLinkIconContainer = ({ theme }) => ({
  width: theme.orbit.widthIconSmall,
  height: theme.orbit.heightIconSmall,
  leftMargin: "string",
  rightMargin: "string",
});

const getTextLinkStyleProps: GetTextLinkStyleProps = props => {
  const { theme, type } = props;
  return {
    fontSize: getSizeToken(props),
    ...getDefaultForeground(props),
    foregroundHover: theme.orbit.paletteProductNormalHover,
    foregroundActive: theme.orbit.paletteProductNormalHover,
    foregroundFocus: theme.orbit.paletteProductNormalHover,
    fontWeight: theme.orbit.fontWeightLinks,
    inlineDisplay: "inline-flex",
    blockDisplay: "inline-flex",
    underlined:
      type === TYPE_OPTIONS.SECONDARY
        ? theme.orbit.textDecorationTextLinkSecondary
        : theme.orbit.textDecorationTextLinkPrimary,
    underlinedHover: false,
    icons: getTextLinkIconContainer(props),
  };
};

export default getTextLinkStyleProps;
