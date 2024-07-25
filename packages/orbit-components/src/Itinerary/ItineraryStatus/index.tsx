"use client";

import * as React from "react";
import cx from "clsx";

import Text from "../ItineraryText";
import Stack from "../../Stack";
import { STATUS } from "./consts";
import type { Theme } from "../../defaultTheme";
import type { Status } from "../types";
import AlertOctagon from "../../icons/AlertOctagon";
import Warning from "../../icons/AlertCircle";
import Info from "../../icons/InformationCircle";
import Check from "../../icons/CheckCircle";
import useTheme from "../../hooks/useTheme";
import { spaceAfterClasses } from "../../common/tailwind";
import type { Props } from "./types";

const borderColorClasses: Record<STATUS, string> = {
  [STATUS.WARNING]: "border-s-orange-normal",
  [STATUS.CRITICAL]: "border-s-red-normal",
  [STATUS.INFO]: "border-s-blue-normal",
  [STATUS.SUCCESS]: "border-s-green-normal",
  [STATUS.NEUTRAL]: "border-s-ink-dark",
};

const backgroundColor: Record<STATUS, string> = {
  [STATUS.WARNING]: "bg-orange-light",
  [STATUS.CRITICAL]: "bg-red-light",
  [STATUS.INFO]: "bg-blue-light",
  [STATUS.SUCCESS]: "bg-green-light",
  [STATUS.NEUTRAL]: "bg-cloud-normal",
};

// TODO: refactor this after designers will resolve status colors
// https://skypicker.slack.com/archives/GSGN9BN6Q/p1674568716519889
const StatusIcon = ({ type, theme }: { type: Status; theme: Theme }) => {
  switch (type) {
    case "info":
      return <Info size="small" customColor={theme.orbit.paletteBlueDark} />;
    case "critical":
      return <AlertOctagon size="small" customColor={theme.orbit.paletteRedDark} />;
    case "success":
      return <Check size="small" customColor={theme.orbit.paletteGreenDark} />;
    case "neutral":
      return <Info size="small" customColor="primary" />;
    default:
      return <Warning size="small" customColor={theme.orbit.paletteOrangeDark} />;
  }
};

const ItineraryStatus = ({
  type,
  label,
  spaceAfter = "medium",
  children,
  offset = 0,
  actionable = true,
}: Props) => {
  const theme = useTheme();

  return (
    <div
      className={cx(
        "rounded-150 shadow-fixed box-border flex w-full flex-col border-0 border-s-[3px] border-solid",
        type && borderColorClasses[type],
        spaceAfter && spaceAfterClasses[spaceAfter],
        actionable && "hover:shadow-action-active",
      )}
    >
      <div
        className={cx(
          "px-xs min-h-xl rounded-tl-100 rounded-tr-150 flex items-center rounded-b-none py-0",
          type && backgroundColor[type],
        )}
      >
        <div
          className="z-[2]"
          style={{ marginInlineStart: `${parseInt(theme.orbit.spaceSmall, 10) + offset}px` }}
        >
          <Stack flex spacing="XSmall" align="center">
            <StatusIcon type={type} theme={theme} />
            {label && (
              <Text as="div" type={type === "neutral" ? "primary" : type} weight="medium">
                {label}
              </Text>
            )}
          </Stack>
        </div>
      </div>
      {children}
    </div>
  );
};

export default ItineraryStatus;
