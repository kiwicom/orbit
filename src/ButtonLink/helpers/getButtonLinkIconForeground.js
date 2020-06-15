// @flow
import { TOKENS } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkIconForeground } from "./getButtonLinkIconForeground";

const getButtonLinkIconForeground: GetButtonLinkIconForeground = ({ type, theme }) => ({
  foreground: getButtonLinkTypeToken(TOKENS.foreground, type, theme),
  foregroundHover: getButtonLinkTypeToken(TOKENS.foregroundHover, type, theme),
  foregroundActive: getButtonLinkTypeToken(TOKENS.foregroundActive, type, theme),
  foregroundFocus: getButtonLinkTypeToken(TOKENS.foregroundActive, type, theme),
});

export default getButtonLinkIconForeground;
