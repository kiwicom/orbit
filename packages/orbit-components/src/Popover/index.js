// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import useStateWithTimeout from "../hooks/useStateWithTimeout";
import useTheme from "../hooks/useTheme";
import { PLACEMENTS } from "./consts";
import PopoverContent from "./components/ContentWrapper";
import mq from "../utils/mediaQuery";
import Portal from "../Portal";
import defaultTheme from "../defaultTheme";
import handleKeyDown from "../utils/handleKeyDown";

import type { Props } from ".";

const StyledPopoverChild = styled.div`
  position: relative;
`;

const StyledPopoverWrapper = styled.div`
  position: relative;
`;

const StyledPopoverContent = styled.div`
  ${({ theme }) => css`
    overflow: auto;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    width: 100%;
    background-color: ${theme.orbit.paletteWhite};
  `}

  ${mq.largeMobile(css`
    border-radius: 3px;
  `)}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverContent.defaultProps = {
  theme: defaultTheme,
};

const Popover = ({
  children,
  renderInPortal = true,
  opened,
  content,
  onClose,
  onOpen,
  offset,
  placement = PLACEMENTS.BOTTOM_START,
  fixed,
  noPadding,
  width,
  actions,
  overlapped,
  dataTest,
}: Props): React.Node => {
  const [referenceElement, setReferenceElement] = React.useState(null);

  const theme = useTheme();

  const transitionLength = React.useMemo(() => parseFloat(theme.orbit.durationFast) * 1000, [
    theme.orbit.durationFast,
  ]);

  const [shown, setShown, setShownWithTimeout, clearShownTimeout] = useStateWithTimeout<boolean>(
    false,
    transitionLength,
  );
  const [
    render,
    setRender,
    setRenderWithTimeout,
    clearRenderTimeout,
  ] = useStateWithTimeout<boolean>(false, transitionLength);

  const resolveCallback = React.useCallback(
    state => {
      if (onClose && !state) onClose();
      if (onOpen && state) onOpen();
    },
    [onClose, onOpen],
  );

  const handleOut = React.useCallback(
    ev => {
      // If open prop is present ignore custom handler

      if (referenceElement && !referenceElement.contains(ev.target)) {
        if (typeof opened === "undefined") {
          setShown(false);
          clearShownTimeout();
          setRenderWithTimeout(false);
          resolveCallback(false);
        } else if (onClose) onClose();
      }
    },
    [
      referenceElement,
      clearShownTimeout,
      onClose,
      opened,
      resolveCallback,
      setRenderWithTimeout,
      setShown,
    ],
  );

  const handleClick = React.useCallback(() => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      if (shown) {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
        resolveCallback(false);
      } else {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
        resolveCallback(true);
      }
    } else if (opened) {
      resolveCallback(false);
    } else if (!opened) {
      resolveCallback(true);
    }
  }, [
    clearRenderTimeout,
    clearShownTimeout,
    opened,
    resolveCallback,
    setRender,
    setRenderWithTimeout,
    setShown,
    setShownWithTimeout,
    shown,
  ]);

  React.useEffect(() => {
    if (typeof opened !== "undefined") {
      if (opened) {
        setRender(true);
        clearRenderTimeout();
        setShownWithTimeout(true);
      } else {
        setShown(false);
        clearShownTimeout();
        setRenderWithTimeout(false);
      }
    }
  }, [
    opened,
    clearRenderTimeout,
    clearShownTimeout,
    setRender,
    setShown,
    setShownWithTimeout,
    setRenderWithTimeout,
  ]);

  const popover = (
    <PopoverContent
      shown={shown}
      dataTest={dataTest}
      overlapped={overlapped}
      fixed={fixed}
      noPadding={noPadding}
      actions={actions}
      width={width}
      offset={offset}
      referenceElement={referenceElement}
      onClose={handleOut}
      placement={placement}
    >
      {content}
    </PopoverContent>
  );

  return (
    <StyledPopoverWrapper>
      <StyledPopoverChild
        ref={setReferenceElement}
        onClick={handleClick}
        onKeyDown={handleKeyDown(handleClick)}
      >
        {children}
      </StyledPopoverChild>
      {render && (renderInPortal ? <Portal renderInto="popovers">{popover}</Portal> : popover)}
    </StyledPopoverWrapper>
  );
};

export default Popover;
