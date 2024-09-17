"use client";

import React from "react";
import cx from "clsx";

import { useTabs, useTab } from "../../TabContext";
import type { Props } from "./types";
import { TYPE_OPTIONS } from "./consts";

const Tab = ({
  children,
  dataTest,
  active = false,
  disabled,
  onClick,
  type = TYPE_OPTIONS.DEFAULT,
}: Props) => {
  const { setSelected, selected, onChange } = useTabs();
  const { index, compact } = useTab();
  const isSelected = active || selected === index;

  React.useEffect(() => {
    if (onChange && !onClick) onChange(selected);
    if (onClick) setSelected(undefined);
  }, [onChange, selected, setSelected]);

  return (
    <button
      data-test={dataTest}
      className={cx(
        "flex flex-1 flex-row items-center justify-between",
        "appearance-none border-0",
        "min-w-fit",
        "relative box-border",
        "font-base font-medium",
        "rounded-t-100",
        "duration-fast transition-colors ease-in-out",
        "px-400",
        compact ? "text-normal py-[5px] leading-normal" : "text-large leading-large py-[9px]",
        disabled && "cursor-not-allowed opacity-50",
        !disabled && [
          "cursor-pointer",
          !isSelected && "border-0",
          isSelected && type === TYPE_OPTIONS.DEFAULT && "border-product-normal border-b-2",
          isSelected &&
            type !== TYPE_OPTIONS.DEFAULT &&
            type === TYPE_OPTIONS.BASIC &&
            "border-b-2 [border-image-slice:1] [border-image-source:theme(backgroundImage.tab-bundle-basic-foreground)]",
          isSelected &&
            type !== TYPE_OPTIONS.DEFAULT &&
            type === TYPE_OPTIONS.MEDIUM &&
            "border-b-2 [border-image-slice:1] [border-image-source:theme(backgroundImage.tab-bundle-medium-foreground)]",
          isSelected &&
            type !== TYPE_OPTIONS.DEFAULT &&
            type === TYPE_OPTIONS.TOP &&
            "border-b-2 [border-image-slice:1] [border-image-source:theme(backgroundImage.tab-bundle-top-foreground)]",
        ],
        type === TYPE_OPTIONS.DEFAULT && "bg-white-normal hover:bg-white-normal-hover ",
        type === TYPE_OPTIONS.BASIC &&
          "bg-tab-bundle-basic-background hover:bg-tab-bundle-basic-background-hover active:bg-tab-bundle-basic-background-active",
        type === TYPE_OPTIONS.MEDIUM &&
          "bg-tab-bundle-medium-background hover:bg-tab-bundle-medium-background-hover active:bg-tab-bundle-medium-background-active",
        type === TYPE_OPTIONS.TOP &&
          "bg-tab-bundle-top-background hover:bg-tab-bundle-top-background-hover",
      )}
      onClick={ev => {
        if (onClick) {
          onClick(ev);
        } else setSelected(index);
      }}
      type="button"
      disabled={disabled}
      role="tab"
      aria-selected={isSelected}
      aria-disabled={disabled}
      aria-controls={`panel-${index}`}
    >
      <span
        className={cx(
          "w-full",
          isSelected ? "text-ink-dark" : "text-ink-normal",
          type !== TYPE_OPTIONS.DEFAULT && [
            "bg-clip-text [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]",
            type === TYPE_OPTIONS.BASIC && "bg-tab-bundle-basic-foreground",
            type === TYPE_OPTIONS.MEDIUM && "bg-tab-bundle-medium-foreground",
            type === TYPE_OPTIONS.TOP && "bg-tab-bundle-top-foreground",
          ],
        )}
      >
        {children}
      </span>
    </button>
  );
};

export default Tab;
