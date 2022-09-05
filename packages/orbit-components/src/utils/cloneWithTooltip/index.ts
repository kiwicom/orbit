import { cloneElement } from "react";

const cloneWithTooltip = (
  tooltip: React.ReactElement<any>,
  children: React.ReactNode,
): React.ReactNode => {
  if (!tooltip) return children;
  return cloneElement(tooltip, {
    children,
  });
};

export default cloneWithTooltip;
