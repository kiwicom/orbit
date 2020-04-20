// @flow
import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { GetButtonIconForeground } from "./getButtonIconForeground";

const getButtonIconForeground: GetButtonIconForeground = ({ bordered, theme, type }) => {
  if (bordered) {
    return {
      iconForeground: getButtonTypeToken({ name: TOKENS.colorTextButtonBordered, theme, type }),
      iconForegroundHover: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedHover,
        theme,
        type,
      }),
      iconForegroundActive: getButtonTypeToken({
        name: TOKENS.colorTextButtonBorderedActive,
        theme,
        type,
      }),
    };
  }
  return {
    iconForeground: getButtonTypeToken({ name: TOKENS.colorTextButton, theme, type }),
    iconForegroundHover: getButtonTypeToken({ name: TOKENS.colorTextButtonHover, theme, type }),
    iconForegroundActive: getButtonTypeToken({ name: TOKENS.colorTextButtonActive, theme, type }),
  };
};

export default getButtonIconForeground;
