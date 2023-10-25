import * as React from "react";
import cx from "clsx";

import useClickOutside from "../../hooks/useClickOutside";
import type { Props } from "./types";
import useTheme from "../../hooks/useTheme";

const SwitchSegment = ({
  value,
  label,
  disabled,
  onChange,
  setTooltipShown,
  onFocus,
  defaultChecked,
  name,
}: Props) => {
  const theme = useTheme();
  const ref = React.useRef<HTMLInputElement | null>(null);
  useClickOutside(ref, () => setTooltipShown(false));

  return (
    <label className="orbit-switch-segment-label relative flex w-full">
      <input
        className={cx(
          "sr-only absolute m-[-1px] h-[1px] w-[1px] overflow-hidden whitespace-nowrap border-0 p-0 focus:outline-none",
          "peer",
        )}
        name={name || "switch-segment"}
        defaultChecked={defaultChecked}
        type="radio"
        role="switch"
        ref={ref}
        aria-checked={Boolean(value)}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        value={value}
      />
      <div
        className={cx(
          "orbit-switch-segment-text",
          "peer-checked:text-form-element-label-filled-foreground peer-checked:outline-blue-normal peer-checked:z-10 peer-checked:!rounded-[5px] peer-checked:outline peer-checked:outline-2 ",
          "peer-focus:text-form-element-label-filled-foreground peer-focus:outline-blue-normal peer-focus:z-10 peer-focus:!rounded-[5px] peer-focus:outline peer-focus:outline-2 ",
          "p-sm font-base text-normal duration-fast box-border flex w-full max-w-full cursor-pointer items-center justify-center border-0 text-center font-medium leading-normal transition-colors ease-in-out",
          "bg-form-element-background text-form-element-foreground hover:text-form-element-label-filled-foreground",
        )}
        style={{ boxShadow: `0 0 0 1px ${theme.orbit.paletteCloudDark}` }}
      >
        {label}
      </div>
    </label>
  );
};

export default SwitchSegment;
