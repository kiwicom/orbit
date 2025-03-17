import type * as React from "react";
import { useRef, useState, useCallback } from "react";

import type { Event } from "../../common/types";

const useErrorTooltip = <T = HTMLInputElement, K = HTMLLabelElement & HTMLDivElement>({
  onFocus,
  hasTooltip = true,
}: {
  onFocus?: Event<React.FocusEvent<T>>;
  hasTooltip?: boolean;
}): {
  tooltipShown: boolean;
  tooltipShownHover: boolean;
  setTooltipShown: React.Dispatch<React.SetStateAction<boolean>>;
  setTooltipShownHover: React.Dispatch<React.SetStateAction<boolean>>;
  labelRef: React.MutableRefObject<K | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  handleFocus: Event<React.FocusEvent<T>>;
} => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef<K | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(
    (ev: React.FocusEvent<T>) => {
      if (onFocus) onFocus(ev);
      if (hasTooltip) setTooltipShown(true);
    },
    [onFocus, hasTooltip],
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
