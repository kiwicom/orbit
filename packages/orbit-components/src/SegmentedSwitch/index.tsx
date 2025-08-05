"use client";

import * as React from "react";
import cx from "clsx";

import FormLabel from "../FormLabel";
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
        "gap-50 relative flex w-full min-w-fit flex-col",
        spaceAfter && spaceAfterClasses[spaceAfter],
        "[&_.orbit-switch-segment-label:first-child_.orbit-switch-segment-text]:rounded-s-300",
        "[&_.orbit-switch-segment-label:last-child_.orbit-switch-segment-text]:rounded-e-300",
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
      <div
        className={cx(
          "rounded-300 border-cloud-dark flex border",
          "[&>label]:border-cloud-dark [&>label]:border-s",
          "[&>label:has(input:checked)]:border-s-0",
          "[&>label:has(input:focus)]:border-s-0",
          "[&>label:not(:has(input:checked)):nth-of-type(1)]:border-s-0",
          "[&>label:has(input:checked):not(:nth-of-type(0))_+_label:not(:has(input:checked))]:border-s-0",
          "[&>label:has(input:checked):not(:nth-of-type(0))_+_label:has(input:checked)_+_label:not(:has(input:checked))]:border-s-0",
          "[&>label:has(input:focus):not(:nth-of-type(0))_+_label:not(:has(input:checked))]:border-s-0",
          "[&>label:has(input:focus):not(:nth-of-type(0))_+_label:has(input:focus)_+_label:not(:has(input:checked))]:border-s-0",
        )}
      >
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
      </div>
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
