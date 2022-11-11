import { Type } from "../types";
import defaultTheme from "../../../defaultTheme";

export const renderStatus = (type: Type, theme: typeof defaultTheme): string => {
  if (type === "success") return theme.orbit.colorTextSuccess;
  if (type === "warning") return theme.orbit.colorTextWarning;
  if (type === "critical") return theme.orbit.colorTextCritical;
  if (type === "info") return theme.orbit.colorTextInfo;

  return theme.orbit.paletteCloudNormalHover;
};

export default renderStatus;
