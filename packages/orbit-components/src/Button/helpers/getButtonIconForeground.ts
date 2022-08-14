import { TOKENS } from "../consts";
import getButtonTypeToken from "./getButtonTypeToken";
import { Theme } from "../../defaultTheme";
import { Type } from "../index.d";

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
