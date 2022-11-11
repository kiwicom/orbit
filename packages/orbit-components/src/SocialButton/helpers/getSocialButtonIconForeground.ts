import { TOKENS } from "../consts";
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import { Theme } from "../../defaultTheme";
import { Type } from "../types";

const getSocialButtonIconForeground = ({
  theme,
  type,
}: {
  theme: Theme;
  type: Type;
}): { foreground: string } => ({
  foreground: getSocialButtonTypeToken(TOKENS.iconColor, type, theme),
});

export default getSocialButtonIconForeground;
