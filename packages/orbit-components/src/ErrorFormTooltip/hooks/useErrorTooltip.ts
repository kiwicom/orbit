import React, { useRef, useState, useCallback } from "react";

import { Event } from "../../common/common";

const useErrorTooltip = ({
  onFocus,
}: {
  onFocus?: Event<React.SyntheticEvent<HTMLInputElement>>;
}): {
  tooltipShown: boolean;
  tooltipShownHover: boolean;
  setTooltipShown: React.Dispatch<React.SetStateAction<boolean>>;
  setTooltipShownHover: React.Dispatch<React.SetStateAction<boolean>>;
  labelRef: React.MutableRefObject<HTMLLabelElement | null>;
  iconRef: React.MutableRefObject<HTMLDivElement | null>;
  handleFocus: Event<React.SyntheticEvent<HTMLInputElement>>;
} => {
  const [tooltipShown, setTooltipShown] = useState(false);
  const [tooltipShownHover, setTooltipShownHover] = useState(false);
  const labelRef = useRef<HTMLLabelElement | null>(null);
  const iconRef = useRef<HTMLDivElement | null>(null);

  const handleFocus = useCallback(
    (ev: React.SyntheticEvent<HTMLInputElement>) => {
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
