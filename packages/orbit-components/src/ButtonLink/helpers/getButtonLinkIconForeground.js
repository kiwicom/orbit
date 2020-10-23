// @flow
import { TOKENS, TYPES } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkIconForeground } from "./getButtonLinkIconForeground";

const getButtonLinkIconForeground: GetButtonLinkIconForeground = ({ type, theme, compact }) => {
  const wrappedTypeReturn = usedType => ({
    foreground: getButtonLinkTypeToken(TOKENS.foreground, type, theme),
    foregroundHover: getButtonLinkTypeToken(TOKENS.foregroundHover, usedType, theme),
    foregroundActive: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
    foregroundFocus: getButtonLinkTypeToken(TOKENS.foregroundActive, usedType, theme),
  });
  if (compact && type === TYPES.SECONDARY) {
    return wrappedTypeReturn(TYPES.PRIMARY);
  }
  return wrappedTypeReturn(type);
};

export default getButtonLinkIconForeground;
