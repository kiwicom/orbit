import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { Type } from "../types";
import type { Theme } from "../../defaultTheme";

interface ButtonLinkStyles {
  background?: string;
  backgroundHover?: string;
  backgroundActive?: string;
  backgroundFocus?: string;
  foreground?: string;
  foregroundHover?: string;
  foregroundActive?: string;
  foregroundFocus?: string;
}

type GetButtonLinkStylesType = ({
  type,
  theme,
  compact,
}: {
  type: Type;
  theme: Theme;
  compact: boolean;
}) => ButtonLinkStyles;

const getButtonLinkStyles: GetButtonLinkStylesType = ({ type, theme, compact }) => {
  const wrappedTypeToken = (name: string) => getButtonLinkTypeToken(name, type, theme);
  const commonStyles: Partial<ButtonLinkStyles> = {
    background: wrappedTypeToken(TOKENS.background),
    foreground: wrappedTypeToken(TOKENS.foreground),
    foregroundHover: wrappedTypeToken(TOKENS.foregroundHover),
    foregroundActive: wrappedTypeToken(TOKENS.foregroundActive),
    foregroundFocus: wrappedTypeToken(TOKENS.foregroundActive),
  };

  if (compact) {
    if (type === TYPES.SECONDARY) {
      return {
        ...commonStyles,
        foregroundHover: theme.orbit.paletteProductNormalHover,
        foregroundActive: theme.orbit.paletteProductNormalHover,
        foregroundFocus: theme.orbit.paletteProductNormalActive,
      };
    }
    return commonStyles;
  }

  return {
    backgroundHover: wrappedTypeToken(TOKENS.backgroundHover),
    backgroundActive: wrappedTypeToken(TOKENS.backgroundActive),
    backgroundFocus: wrappedTypeToken(TOKENS.backgroundActive),
    ...commonStyles,
  };
};

export default getButtonLinkStyles;
