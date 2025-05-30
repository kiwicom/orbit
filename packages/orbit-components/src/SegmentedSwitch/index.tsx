"use client";

import * as React from "react";
import cx from "clsx";

import FormLabel from "../FormLabel";
import Stack from "../Stack";
import SwitchSegment from "./SwitchSegment";
import ErrorFormTooltip from "../ErrorFormTooltip";
import useErrorTooltip from "../ErrorFormTooltip/hooks/useErrorTooltip";
import { spaceAfterClasses } from "../common/tailwind/spaceAfter";
import type { Props } from "./types";

const SegmentedSwitch = ({
  options,
  dataTest,
  onChange,
  showTooltip,
  spaceAfter,
  onFocus,
  maxWidth,
  help,
  error,
  label,
  ariaLabel,
  ariaLabelledby,
}: Props) => {
  const hasTooltip = Boolean(error || help);

  const { tooltipShown, tooltipShownHover, setTooltipShown, setTooltipShownHover, labelRef } =
    useErrorTooltip({ onFocus, hasTooltip });

  React.useEffect(() => {
    if (hasTooltip) {
      if (showTooltip) setTooltipShown(true);
      else setTooltipShown(false);
    }
  }, [showTooltip, hasTooltip, setTooltipShown]);

  return (
    <div
      data-test={dataTest}
      ref={labelRef}
      className={cx(
        "gap-50 relative flex w-full flex-col",
        spaceAfter && spaceAfterClasses[spaceAfter],
        "[&_.orbit-switch-segment-label:first-child_.orbit-switch-segment-text]:rounded-s-[5px]",
        "[&_.orbit-switch-segment-label:last-child_.orbit-switch-segment-text]:rounded-e-[5px]",
      )}
      style={{ maxWidth }}
      role="group"
      aria-label={ariaLabel || label}
      aria-labelledby={ariaLabelledby}
    >
      {label && (
        <FormLabel
          help={!!help}
          error={!!error}
          onMouseEnter={() => setTooltipShownHover(true)}
          onMouseLeave={() => setTooltipShownHover(false)}
        >
          {label}
        </FormLabel>
      )}
      <Stack flex spacing="none">
        {options.map(({ value, label: optionLabel, ...props }) => (
          <SwitchSegment
            key={value}
            value={value}
            label={optionLabel}
            setTooltipShown={setTooltipShown}
            onChange={onChange}
            onFocus={onFocus}
            {...props}
          />
        ))}
      </Stack>
      {hasTooltip && (
        <ErrorFormTooltip
          help={help}
          error={error}
          shown={tooltipShown || tooltipShownHover}
          onShown={prev => setTooltipShown(!prev)}
          referenceElement={labelRef}
        />
      )}
    </div>
  );
};

export default SegmentedSwitch;
