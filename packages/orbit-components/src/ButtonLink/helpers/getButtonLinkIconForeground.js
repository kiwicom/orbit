// @flow
import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkIconForeground } from "./getButtonLinkIconForeground";

const getButtonLinkIconForeground: GetButtonLinkIconForeground = ({ type, theme, compact }) => {
  const foreground = getButtonLinkTypeToken(TOKENS.foreground, type, theme);
  const wrappedTypeReturn = usedType => ({
    foregroundHover: getButtonLinkTypeToken(TOKENS.foregroundHover, usedType, theme),
    foregroundActive: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
    foregroundFocus: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
  });
  if (compact && type === TYPES.SECONDARY) {
    return {
      foreground,
      ...wrappedTypeReturn(TYPES.PRIMARY),
    };
  }
  return {
    foreground,
    ...wrappedTypeReturn(type),
  };
};

export default getButtonLinkIconForeground;
