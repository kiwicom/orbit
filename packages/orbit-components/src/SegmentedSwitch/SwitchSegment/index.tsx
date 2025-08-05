import * as React from "react";
import cx from "clsx";

import useClickOutside from "../../hooks/useClickOutside";
import type { Props } from "./types";

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
  const ref = React.useRef<HTMLInputElement | null>(null);
  useClickOutside(ref, () => setTooltipShown(false));

  return (
    <label className="orbit-switch-segment-label relative flex w-full">
      <input
        className={cx(
          "sr-only absolute -m-px size-px overflow-hidden whitespace-nowrap border-0 p-0 focus:outline-none",
          "peer",
        )}
        name={name || "switch-segment"}
        defaultChecked={defaultChecked}
        type="radio"
        ref={ref}
        onChange={onChange}
        onFocus={onFocus}
        disabled={disabled}
        value={value}
      />
      <div
        className={cx(
          "orbit-switch-segment-text",
          "peer-checked:text-blue-normal peer-checked:outline-blue-normal peer-checked:!rounded-300 peer-checked:z-10 peer-checked:outline peer-checked:outline-2 ",
          "peer-focus:peer-[:not(:checked)]:text-form-element-label-filled-foreground peer-focus:outline-blue-normal peer-focus:!rounded-300 peer-focus:z-10 peer-focus:outline peer-focus:outline-2 ",
          "p-300 font-base text-normal duration-fast box-border flex w-full max-w-full cursor-pointer items-center justify-center border-0 text-center font-medium leading-normal transition-colors ease-in-out",
          "bg-form-element-background text-form-element-foreground hover:text-form-element-label-filled-foreground",
        )}
      >
        {label}
      </div>
    </label>
  );
};

export default SwitchSegment;
