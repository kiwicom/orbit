// @flow
import { useRef, useState } from "react";

import type { UseErrorTooltip } from "./useErrorTooltip.js.flow";

const useErrorTooltip: UseErrorTooltip = (onFocus, onBlur) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);

  const handleFocus = ev => {
    if (onFocus) onFocus(ev);
    setTooltipShown(true);
  };

  const handleBlur = ev => {
    if (onBlur) onBlur(ev);
    setTooltipShown(false);
  };

  return [
    tooltipShown,
    tooltipShownHover,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
    handleBlur,
  ];
};

export default useErrorTooltip;
