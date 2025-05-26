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
      labelDismiss,
    },
    ref,
  ) => {
    return (
      <div
        className={cx(
          "orbit-tag",
          "font-base rounded-150 box-border inline-flex items-stretch justify-center font-medium",
          "duration-fast transition-[color,_background-color,_box-shadow] ease-in-out",
          "tb:rounded-100",
          size === SIZES.SMALL && "text-small leading-small",
          size === SIZES.NORMAL && "text-normal leading-normal",
          !!onRemove && !onClick && "pointer-events-none",
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
      >
        <div
          className={cx(
            "flex items-center",
            "focus:rounded-150 focus:z-default",
            onRemove ? "ps-200 py-200 pe-100 rounded-l-150" : "p-200 rounded-150",
            selected && [
              dateTag ? "focus-visible:bg-ink-light-active" : "focus-visible:bg-blue-normal-hover",
            ],
            type === TYPES.NEUTRAL && !selected && "focus-visible:bg-cloud-normal-hover",
            type === TYPES.COLORED && !selected && "focus-visible:bg-blue-light-hover",
          )}
          id={id}
          ref={ref}
          {...(onClick && {
            role: "button",
            tabIndex: 0,
            onClick,
            onKeyDown: ev => buttonClickEmulation(ev, onClick),
          })}
        >
          {iconLeft && (
            <div className="pe-200 [&_svg]:size-icon-small flex flex-row items-center justify-center">
              {iconLeft}
            </div>
          )}
          {children}
        </div>
        {onRemove && (
          <div
            className={cx(
              "orbit-tag-close-container",
              "pe-200 ps-100 rounded-r-150 flex items-center justify-center",
              "duration-fast transition-[color,_opacity] ease-in-out",
              "focus:rounded-150 focus:z-default focus:opacity-100 active:opacity-100",
              !onClick && "pointer-events-auto",
              !selected &&
                (type === TYPES.NEUTRAL
                  ? "text-ink-normal active:text-ink-dark focus-visible:bg-cloud-normal-hover"
                  : "text-blue-darker"),
              !selected && TYPES.COLORED && "focus-visible:bg-blue-light-hover",
              selected ? "text-white-normal opacity-100" : "opacity-50",
              selected && [
                dateTag
                  ? "focus-visible:bg-ink-light-active"
                  : "focus-visible:bg-blue-normal-hover",
              ],
            )}
            tabIndex={0}
            aria-label={labelDismiss}
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
