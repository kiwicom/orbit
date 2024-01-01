"use client";

import * as React from "react";
import styled from "styled-components";

import type * as Common from "../common/types";
import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepProvider } from "./TimelineContext";
import getSpacingToken from "../common/getSpacingToken";
import themeDefault from "../defaultTheme";
import type { Props } from "./types";

const WrapperStyled = styled.div<{ spaceAfter?: Common.SpaceAfterSizes }>`
  position: relative;
  overflow: hidden;
  margin-bottom: ${getSpacingToken};
`;

WrapperStyled.defaultProps = {
  theme: themeDefault,
};

const Timeline = ({ children, spaceAfter, direction, dataTest, id }: Props) => {
  const childrenArr = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();

  const getDirection = () => {
    if (direction) return direction;
    return isDesktop ? "row" : "column";
  };

  const hasSubLabelMargin = React.useMemo(
    () => childrenArr.some(child => React.isValidElement(child) && child.props.subLabel),
    [childrenArr],
  );

  return childrenArr && childrenArr.length > 0 ? (
    <WrapperStyled spaceAfter={spaceAfter} data-test={dataTest} id={id}>
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
    </WrapperStyled>
  ) : null;
};

export default Timeline;
export { default as TimelineStep } from "./TimelineStep";
