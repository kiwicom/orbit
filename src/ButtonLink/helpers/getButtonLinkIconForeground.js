// @flow
import { TOKENS } from "../consts";
import getButtonLinkTypeToken from "./getButtonLinkTypeToken";
import type { GetButtonLinkIconForeground } from "./getButtonLinkIconForeground";

const getButtonLinkIconForeground: GetButtonLinkIconForeground = props => ({
  foreground: getButtonLinkTypeToken({ name: TOKENS.foreground, ...props }),
  foregroundHover: getButtonLinkTypeToken({ name: TOKENS.foregroundHover, ...props }),
  foregroundActive: getButtonLinkTypeToken({ name: TOKENS.foregroundActive, ...props }),
});

export default getButtonLinkIconForeground;
