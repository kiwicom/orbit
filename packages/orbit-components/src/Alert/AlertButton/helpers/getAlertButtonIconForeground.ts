import { TOKENS } from "../consts";
import getAlertButtonTypeToken from "./getAlertButtonTypeToken";
import { Theme } from "../../../defaultTheme";
import { Type } from "../types";

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
