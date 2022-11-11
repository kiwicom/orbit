import { cloneElement } from "react";

const cloneWithTooltip = (tooltip: any, children: React.ReactNode): React.ReactNode => {
  if (!tooltip) return children;
  return cloneElement(tooltip, {
    children,
  });
};

export default cloneWithTooltip;
