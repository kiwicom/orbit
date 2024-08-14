"use client";

import * as React from "react";
import cx from "clsx";

import type { Props } from "./types.d";
import TYPE_OPTIONS from "./consts";
import useTheme from "../hooks/useTheme";

const CircleLoader = ({ animationDelay }: { animationDelay?: string }) => {
  return (
    <div
      className="animate-loader bg-cloud-dark size-200 me-150 rounded-full [&:nth-child(3)]:m-0"
      style={{ animationDelay }}
    />
  );
};

const Loader = ({ type, customSize }) => {
  const theme = useTheme();
  const isCircledIcon =
    type === TYPE_OPTIONS.BOX_LOADER ||
    type === TYPE_OPTIONS.SEARCH_LOADER ||
    type === TYPE_OPTIONS.INLINE_LOADER;

  if (customSize) {
    return (
      <svg
        viewBox={`0 0 ${customSize} ${customSize}`}
        className="orbit-loading-spinner animate-spinner"
        style={{ height: `${customSize}px`, width: `${customSize}px` }}
      >
        <circle
          cx="50%"
          cy="50%"
          fill="transparent"
          strokeWidth="3px"
          stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "current" : theme.orbit.paletteCloudDark}
          strokeLinecap="round"
          strokeDasharray={`${customSize * 3 + 8}px`}
          strokeDashoffset={`${Number(customSize) + 24}px`}
          r={customSize / 2 - 2}
        />
      </svg>
    );
  }

  if (isCircledIcon) {
    return (
      <div className="flex items-center justify-center">
        <CircleLoader />
        <CircleLoader animationDelay="0.1s" />
        <CircleLoader animationDelay="0.2s" />
      </div>
    );
  }

  return (
    <svg
      viewBox="0 0 40 40"
      className="orbit-loading-spinner animate-spinner size-1000"
      stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "currentColor" : theme.orbit.paletteCloudDark}
    >
      <circle
        cx="50%"
        cy="50%"
        fill="transparent"
        strokeWidth="3px"
        stroke={type === TYPE_OPTIONS.BUTTON_LOADER ? "current" : theme.orbit.paletteCloudDark}
        strokeLinecap="round"
        r="18"
        strokeDasharray="128px"
        strokeDashoffset="64px"
      />
    </svg>
  );
};
const Loading = ({
  loading = false,
  type = TYPE_OPTIONS.PAGE_LOADER,
  text,
  children,
  dataTest,
  customSize,
  id,
}: Props) => {
  return (
    <>
      {Boolean(children) && !loading ? (
        children
      ) : (
        <div
          className={cx([
            "items-center",
            "overflow-hidden",
            "box-border",
            type === TYPE_OPTIONS.BUTTON_LOADER &&
              "[&_.orbit-loading-spinner]:size-icon-medium absolute start-0 top-0 size-full justify-center",
            type === TYPE_OPTIONS.SEARCH_LOADER && "h-1000 justify-start",
            type === TYPE_OPTIONS.INLINE_LOADER && "inline-flex min-h-[19px] justify-center",
            type !== TYPE_OPTIONS.INLINE_LOADER && "flex",
            type === TYPE_OPTIONS.BOX_LOADER && "h-[80px] justify-center",
            type === TYPE_OPTIONS.PAGE_LOADER && "h-[120px] flex-col justify-center",
          ])}
          style={{ height: customSize }}
          data-test={dataTest}
          id={id}
        >
          <Loader type={type} customSize={customSize} />
          {type !== TYPE_OPTIONS.BUTTON_LOADER && Boolean(text) && (
            <div
              className={cx([
                "font-base text-normal text-cloud-dark leading-normal",
                type === TYPE_OPTIONS.PAGE_LOADER ? "mt-400" : "ms-300",
              ])}
            >
              {text}
            </div>
          )}
        </div>
      )}
    </>
  );
};

Loading.displayName = "Loading";

export default Loading;
