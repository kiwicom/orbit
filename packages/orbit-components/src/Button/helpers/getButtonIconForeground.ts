import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import type { Theme } from "../../defaultTheme";
import type { Type } from "../types";

const getButtonIconForeground = ({
  theme,
  type,
}: {
  theme: Theme;
  type: Type;
}): {
  foreground: string;
  foregroundHover: string;
  foregroundActive: string;
  foregroundFocus: string;
} => {
  const wrappedTypeToken = (name: string) => getButtonTypeToken({ name, type, theme });
  return {
    foreground: wrappedTypeToken(TOKENS.colorTextButton),
    foregroundHover: wrappedTypeToken(TOKENS.colorTextButtonHover),
    foregroundActive: wrappedTypeToken(TOKENS.colorTextButtonActive),
    foregroundFocus: wrappedTypeToken(TOKENS.colorTextButtonActive),
  };
};

export default getButtonIconForeground;
