"use client";

import * as React from "react";
import cx from "clsx";

import type * as Common from "../common/types";
import CloseCircle from "../icons/CloseCircle";
import { SIZES, TYPES } from "./consts";
import type { Props } from "./types";

const buttonClickEmulation = (
  ev?: React.KeyboardEvent<HTMLDivElement>,
  callback?: Common.Callback,
) => {
  if (ev && ev.code === "Space") {
    ev.preventDefault();
    if (callback) callback();
  } else if (ev && ev.code === "Enter") {
    if (callback) callback();
  }
};

const Tag = React.forwardRef<HTMLDivElement, Props>(
  (
    {
      selected,
      children,
      iconLeft,
      size = SIZES.NORMAL,
      onClick,
      onRemove,
      id,
      dataTest,
      type = TYPES.NEUTRAL,
      dateTag,
    },
    ref,
  ) => {
    return (
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        className={cx(
          "orbit-tag",
          "font-base rounded-large p-xs box-border inline-flex items-center justify-center font-medium",
          "duration-fast transition-[color,_background-color,_box-shadow] ease-in-out",
          "tb:rounded-normal",
          size === SIZES.SMALL && "text-small leading-small",
          size === SIZES.NORMAL && "text-normal leading-normal",
          !!(onClick || onRemove) &&
            "cursor-pointer [&_.orbit-tag-close-container]:active:opacity-100",
          selected && [
            "text-white-normal",
            dateTag
              ? [
                  "bg-ink-light-hover",
                  !!(onClick || onRemove) &&
                    "hover:bg-ink-light-active focus:bg-ink-light-active active:bg-ink-light-hover",
                ]
              : [
                  "bg-blue-normal",
                  !!(onClick || onRemove) &&
                    "hover:bg-blue-normal-hover focus:bg-blue-normal-hover active:bg-blue-normal-active",
                ],
          ],
          type === TYPES.NEUTRAL && [
            "text-ink-dark",
            !selected && [
              "bg-cloud-normal",
              !!(onClick || onRemove) &&
                "hover:bg-cloud-normal-hover focus:bg-cloud-normal-hover active:bg-cloud-normal-active",
            ],
          ],
          type === TYPES.COLORED && [
            "text-blue-darker",
            !selected && [
              "bg-blue-light",
              !!(onClick || onRemove) &&
                "hover:bg-blue-light-hover focus:bg-blue-light-hover active:bg-blue-light-active",
            ],
          ],
        )}
        data-test={dataTest}
        id={id}
        ref={ref}
        onClick={onClick}
        // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
        tabIndex={(onClick || onRemove) && 0}
        role={onClick || onRemove ? "button" : undefined}
        onKeyDown={ev => buttonClickEmulation(ev, onClick)}
      >
        {iconLeft && (
          <div className="pr-xs [&_svg]:size-icon-small flex flex-row items-center justify-center">
            {iconLeft}
          </div>
        )}
        {children}
        {onRemove && (
          <div
            className={cx(
              "orbit-tag-close-container",
              "ms-xs flex rounded-full",
              "duration-fast transition-[color,_opacity] ease-in-out",
              "focus:opacity-100",
              !selected &&
                (type === TYPES.NEUTRAL
                  ? "text-ink-normal active:text-ink-dark"
                  : "text-blue-darker"),
              selected ? "text-white-normal opacity-100" : "opacity-50",
            )}
            tabIndex={0}
            aria-label="close"
            role="button"
            onKeyDown={ev => {
              ev.stopPropagation();
              buttonClickEmulation(ev, onRemove);
            }}
            onClick={ev => {
              ev.stopPropagation();
              onRemove();
            }}
          >
            <CloseCircle size="small" />
          </div>
        )}
      </div>
    );
  },
);

export default Tag;
