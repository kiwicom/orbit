import { TOKENS } from "../consts";
import getSocialButtonTypeToken from "./getSocialButtonTypeToken";
import type { Theme } from "../../defaultTheme";
import type { Type } from "../types";

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
