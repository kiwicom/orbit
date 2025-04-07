"use client";

import * as React from "react";
import cx from "clsx";

import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepProvider } from "./TimelineContext";
import { spaceAfterClasses } from "../common/tailwind";
import type { Props } from "./types";

const Timeline = ({ children, spaceAfter, direction, dataTest, id }: Props) => {
  const childrenArr = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();

  const getDirection = () => {
    if (direction) return direction;
    return isDesktop ? "row" : "column";
  };

  const hasSubLabelMargin = React.useMemo(
    () =>
      childrenArr.some(
        child =>
          React.isValidElement<{ subLabel?: React.ReactNode }>(child) && child.props.subLabel,
      ),
    [childrenArr],
  );

  return childrenArr && childrenArr.length > 0 ? (
    <div
      className={cx(
        "orbit-timeline relative overflow-hidden",
        spaceAfter && spaceAfterClasses[spaceAfter],
      )}
      data-test={dataTest}
      id={id}
    >
      <Stack flex shrink direction={getDirection()}>
        <TimelineStatusProvider direction={direction}>
          {React.Children.map(childrenArr, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepProvider
                  index={i}
                  last={i + 1 === childrenArr.length}
                  hasSubLabelMargin={hasSubLabelMargin}
                >
                  {child}
                </TimelineStepProvider>
              );
            }
            return null;
          })}
        </TimelineStatusProvider>
      </Stack>
    </div>
  ) : null;
};

export default Timeline;
export { default as TimelineStep } from "./TimelineStep";
