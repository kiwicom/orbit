import React, { useRef, useState, useCallback } from "react";

import { Event } from "../../common/common";

const useErrorTooltip = <T = HTMLInputElement, K = HTMLLabelElement>({
  onFocus,
}: {
  onFocus?: Event<React.SyntheticEvent<T>>;
}): {
  tooltipShown: boolean;
  tooltipShownHover: boolean;
  setTooltipShown: React.Dispatch<React.SetStateAction<boolean>>;
  setTooltipShownHover: React.Dispatch<React.SetStateAction<boolean>>;
  labelRef: React.MutableRefObject<K | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  handleFocus: Event<React.SyntheticEvent<T>>;
} => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef<K | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(
    (ev: React.SyntheticEvent<T>) => {
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
