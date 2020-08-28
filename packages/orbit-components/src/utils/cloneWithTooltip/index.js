// @flow
import { cloneElement } from "react";

import type { CloneWithTooltip } from ".";

const cloneWithTooltip: CloneWithTooltip = (tooltip, children) => {
  if (!tooltip) return children;
  return cloneElement(tooltip, {
    children,
  });
};

export default cloneWithTooltip;
