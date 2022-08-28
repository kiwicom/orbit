import * as React from "react";
import styled from "styled-components";

import * as Common from "../common/common";
import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepContext } from "./TimelineContext";
import getSpacingToken from "../common/getSpacingToken";
import themeDefault from "../defaultTheme";
import { Props } from "./index.d";

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

  return childrenArr && childrenArr.length > 0 ? (
    <WrapperStyled spaceAfter={spaceAfter} data-test={dataTest} id={id}>
      <Stack flex shrink direction={getDirection()}>
        <TimelineStatusProvider direction={direction}>
          {React.Children.map(childrenArr, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepContext.Provider
                  value={{ index: i, last: i + 1 === childrenArr.length }}
                >
                  {child}
                </TimelineStepContext.Provider>
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
