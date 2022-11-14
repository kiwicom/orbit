import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { Type } from "../types";
import type { Theme } from "../../defaultTheme";
import type { IconForeground } from "../../primitives/ButtonPrimitive/types";

type getButtonLinkIconForegroundType = ({
  type,
  theme,
  compact,
}: {
  type: Type;
  theme: Theme;
  compact: boolean;
}) => IconForeground;

const getButtonLinkIconForeground: getButtonLinkIconForegroundType = ({ type, theme, compact }) => {
  const wrappedTypeReturn = (usedType: Type) => ({
    foreground: getButtonLinkTypeToken(TOKENS.foreground, type, theme),
    foregroundHover: getButtonLinkTypeToken(TOKENS.foregroundHover, usedType, theme),
    foregroundActive: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
    foregroundFocus: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
  });

  if (compact && type === TYPES.SECONDARY) {
    return {
      foreground: getButtonLinkTypeToken(TOKENS.foreground, type, theme),
      foregroundHover: theme.orbit.colorTextButtonLinkSecondaryCompactHover,
      foregroundActive: theme.orbit.colorTextButtonLinkSecondaryCompactHover,
      foregroundFocus: theme.orbit.colorTextButtonLinkSecondaryCompactActive,
    };
  }

  return wrappedTypeReturn(type);
};

export default getButtonLinkIconForeground;
