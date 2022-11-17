import { TOKENS } from "../consts";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import type { Theme } from "../../../defaultTheme";
import type { Type } from "../types";

const getAlertButtonIconForeground = ({
  theme,
  type,
}: {
  theme: Theme;
  type: Type;
}): { foreground: string } => ({
  foreground: getAlertButtonTypeToken(TOKENS.colorTextButton, type, theme),
});

export default getAlertButtonIconForeground;
