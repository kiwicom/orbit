// @flow
import { useRef, useState, useCallback } from "react";

import type { UseErrorTooltip } from "./useErrorTooltip.js.flow";

const useErrorTooltip: UseErrorTooltip = ({ onFocus }) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef: {| current: HTMLElement | null |} = useRef(null);

  const handleFocus = useCallback(
    ev => {
      if (onFocus) onFocus(ev);
      setTooltipShown(true);
    },
    [onFocus],
  );

  return {
    tooltipShown,
    tooltipShownHover,
    setTooltipShown,
    setTooltipShownHover,
    labelRef,
    iconRef,
    handleFocus,
  };
};

export default useErrorTooltip;
