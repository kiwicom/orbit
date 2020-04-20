// @flow
import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonIconForeground } from "./getButtonIconForeground";

const getButtonIconForeground: GetButtonIconForeground = ({ bordered, ...props }) => {
  if (bordered) {
    return {
      foreground: getButtonTypeToken({ name: TOKENS.colorTextButtonBordered, ...props }),
      foregroundHover: getButtonTypeToken({ name: TOKENS.colorTextButtonBorderedHover, ...props }),
      foregroundActive: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedActive,
        ...props,
      }),
    };
  }
  return {
    foreground: getButtonTypeToken({ name: TOKENS.colorTextButton, ...props }),
    foregroundHover: getButtonTypeToken({ name: TOKENS.colorTextButtonHover, ...props }),
    foregroundActive: getButtonTypeToken({ name: TOKENS.colorTextButtonActive, ...props }),
  };
};

export default getButtonIconForeground;
