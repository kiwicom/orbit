// @flow
import React from "react";
import styled from "styled-components";

import Stack from "../Stack";
import useMediaQuery from "../hooks/useMediaQuery";
import { TimelineStatusProvider, TimelineStepContext } from "./TimelineContext";
import getSpacingToken from "../common/getSpacingToken";
import themeDefault from "../defaultTheme";
import { useModalContext } from "../Modal/ModalContext";

import type { Props } from "./index";

const WrapperStyled = styled.div`
  position: relative;
  overflow: hidden;
  margin-bottom: ${getSpacingToken};
  z-index: ${({ isInsideModal }) => isInsideModal && `1000`};
`;

WrapperStyled.defaultProps = {
  theme: themeDefault,
};

const Timeline = ({ children, spaceAfter, dataTest }: Props) => {
  const childs = React.Children.toArray(children);
  const { isDesktop } = useMediaQuery();
  const { isInsideModal } = useModalContext();

  return childs && childs.length > 0 ? (
    <WrapperStyled spaceAfter={spaceAfter} data-test={dataTest} isInsideModal={isInsideModal}>
      <Stack flex shrink direction={isDesktop ? "row" : "column"}>
        <TimelineStatusProvider>
          {React.Children.map(childs, (child, i) => {
            if (React.isValidElement(child)) {
              return (
                <TimelineStepContext.Provider value={{ index: i, last: i + 1 === childs.length }}>
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
