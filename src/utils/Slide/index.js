// @flow
import React from "react";
import styled from "styled-components";

import transition from "../transition";
import defaultTheme from "../../defaultTheme";
import useStateWithTimeout from "../../hooks/useStateWithTimeout";

import type { Props } from "./index";

const getMaxHeight = ({ maxHeight }) => {
  if (maxHeight === 0) return "0px";
  if (!maxHeight) return undefined;
  return `${maxHeight}px`;
};

export const StyledSlide = styled.div`
  position: relative;
  width: 100%;
  transition: ${transition(["max-height"], "fast", "linear")};
  max-height: ${getMaxHeight};
  overflow: ${({ transitionFinished }) => !transitionFinished && "hidden"};
  visibility: ${({ visible }) => !visible && "hidden"};
`;

StyledSlide.defaultProps = {
  theme: defaultTheme,
};

const Slide = ({ expanded = false, id, ariaLabelledBy, children, maxHeight }: Props) => {
  const [
    maxHeightState,
    setMaxHeightState,
    setMaxHeightStateTimeout,
    clearMaxHeight,
  ] = useStateWithTimeout(() => (expanded ? null : 0), 150);
  const [
    transitionFinished,
    setTransitionFinished,
    setTransitionFinishedTimeout,
    clearTransitionFinished,
  ] = useStateWithTimeout(() => expanded, 250);
  const [visible, setVisible, setVisibleTimeout, clearVisible] = useStateWithTimeout(
    () => expanded,
    150,
  );

  React.useEffect(() => {
    if (expanded === true) {
      setMaxHeightState(maxHeight);
      clearVisible();
      setVisible(true);
      setMaxHeightStateTimeout(null);
      setTransitionFinishedTimeout(true);
    } else {
      clearVisible();
      clearMaxHeight();
      clearTransitionFinished();
      setTransitionFinishedTimeout(false, 150);
      setMaxHeightStateTimeout(0);
      setVisibleTimeout(false);
    }
  }, [
    maxHeight,
    expanded,
    clearVisible,
    clearMaxHeight,
    setVisible,
    setMaxHeightState,
    setMaxHeightStateTimeout,
    setTransitionFinishedTimeout,
    clearTransitionFinished,
    setTransitionFinished,
    setVisibleTimeout,
  ]);

  console.log(maxHeightState);

  React.useEffect(
    () => () => {
      clearTransitionFinished();
      clearVisible();
      clearMaxHeight();
    },
    [clearVisible, clearTransitionFinished, clearMaxHeight],
  );
  return (
    <StyledSlide
      maxHeight={maxHeightState}
      expanded={expanded}
      transitionFinished={transitionFinished}
      aria-hidden={!expanded}
      id={id}
      aria-labelledby={ariaLabelledBy}
      visible={visible}
      onClick={ev => {
        ev.stopPropagation();
      }}
    >
      {children}
    </StyledSlide>
  );
};

export default Slide;
