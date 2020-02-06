// @flow
import getSizeToken from "./getSizeToken";
import getButtonBoxShadow from "./getButtonBoxShadow";
import getIconSpacing from "./getIconSpacing";
import getButtonSpacing from "./getButtonSpacing";
import { getSize } from "../../Icon";
import { TOKENS, BUTTON_STATES } from "../consts";
import type { GetType } from "./unitedProps";

const unitedProps: GetType = ({ typeToken, bordered, sizeIcon, type, onlyIcon }) => {
  return {
    height: getSizeToken(TOKENS.heightButton),
    fontSize: getSizeToken(TOKENS.fontSizeButton),
    foreground: typeToken(bordered ? TOKENS.colorTextButtonBordered : TOKENS.colorTextButton),
    foregroundHover: typeToken(bordered ? TOKENS.colorTextButtonBordered : TOKENS.colorTextButton),
    foregroundActive: typeToken(
      bordered ? TOKENS.colorTextButtonBorderedActive : TOKENS.colorTextButtonActive,
    ),
    padding: getButtonSpacing,
    background: typeToken(bordered ? TOKENS.backgroundButtonBordered : TOKENS.backgroundButton),
    backgroundHover: typeToken(
      bordered ? TOKENS.backgroundButtonBorderedHover : TOKENS.backgroundButtonHover,
    ),
    backgroundActive: typeToken(
      bordered ? TOKENS.backgroundButtonBorderedActive : TOKENS.backgroundButtonActive,
    ),
    backgroundFocus: typeToken(TOKENS.backgroundButtonFocus),
    boxShadow: getButtonBoxShadow(BUTTON_STATES.DEFAULT, type),
    boxShadowHover: getButtonBoxShadow(BUTTON_STATES.HOVER, type),
    boxShadowActive: getButtonBoxShadow(BUTTON_STATES.ACTIVE, type),
    boxShadowFocus: getButtonBoxShadow(BUTTON_STATES.FOCUS, type),
    iconColorHover: typeToken(bordered ? TOKENS.colorTextButtonBordered : TOKENS.colorTextButton),
    iconColorActive: typeToken(
      bordered ? TOKENS.colorTextButtonBorderedActive : TOKENS.colorTextButtonActive,
    ),
    iconContainer: {
      spacing: getIconSpacing,
      height: getSize(sizeIcon),
      onlyIcon,
      width: getSize(sizeIcon),
      color: bordered
        ? typeToken(TOKENS.colorTextButtonBordered)
        : typeToken(TOKENS.colorTextButton),
    },
    spinner: {
      width: getSizeToken(TOKENS.loadingWidth),
      height: getSizeToken(TOKENS.loadingHeight),
    },
  };
};

export default unitedProps;
