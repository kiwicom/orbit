import { useRef, useState, useCallback } from "react";

const useErrorTooltip = ({ onFocus }: { onFocus: React.FocusEventHandler<HTMLElement> }) => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef(null);
  const iconRef = useRef(null);

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
