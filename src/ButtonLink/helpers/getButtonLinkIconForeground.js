// @flow
import { TOKENS } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkIconForeground } from "./getButtonLinkIconForeground";

const getButtonLinkIconForeground: GetButtonLinkIconForeground = ({ type, theme }) => ({
  foreground: getButtonLinkTypeToken({ name: TOKENS.foreground, type, theme }),
  foregroundHover: getButtonLinkTypeToken({ name: TOKENS.foregroundHover, type, theme }),
  foregroundActive: getButtonLinkTypeToken({ name: TOKENS.foregroundActive, type, theme }),
});

export default getButtonLinkIconForeground;
