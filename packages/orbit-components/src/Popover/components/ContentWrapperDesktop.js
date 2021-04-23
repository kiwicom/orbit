// @flow
import * as React from "react";
import styled, { css } from "styled-components";

import defaultTheme from "../../defaultTheme";
import Button from "../../Button";
import resolvePopoverPosition from "../helpers/resolvePopoverPosition";
import resolvePopoverHorizontal from "../helpers/resolvePopoverHorizontal";
import calculatePopoverPosition from "../helpers/calculatePopoverPosition";
import calculateVerticalPosition from "../helpers/calculateVerticalPosition";
import calculateHorizontalPosition from "../helpers/calculateHorizontalPosition";
import type { Props } from "./ContentWrapper.js.flow";
import useDimensions from "../hooks/useDimensions";
import Translate from "../../Translate";
import transition from "../../utils/transition";
import useClickOutside from "../../hooks/useClickOutside";
import { ModalContext } from "../../Modal/ModalContext";
import boundingClientRect from "../../utils/boundingClientRect";
import getScrollableParent from "../helpers/getScrollableParent";
import { StyledButtonPrimitive } from "../../primitives/ButtonPrimitive";

const popoverPadding = theme => theme.orbit.spaceMedium;

const StyledContentWrapper = styled.div`
  background-color: ${({ theme }) => theme.orbit.paletteWhite};
  max-height: 100%;
  border-radius: 3px;
  position: relative;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledContentWrapper.defaultProps = {
  theme: defaultTheme,
};

const StyledActions = styled.div`
  ${({ theme }) => css`
    box-sizing: border-box;
    padding: ${popoverPadding(theme)};
    padding-top: ${theme.orbit.spaceSmall};
    background-color: ${theme.orbit.paletteWhite};

    ${StyledButtonPrimitive} {
      width: auto;
      flex-grow: 0;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledActions.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverParent = styled.div`
  ${({ isInsideModal, width, fixed, shown, theme }) => css`
    height: auto;
    box-sizing: border-box;
    background-color: ${theme.orbit.backgroundModal}; // TODO: Add token
    transition: ${transition(["opacity"], "fast", "ease-in-out")};
    z-index: ${isInsideModal ? "1000" : "600"};
    position: ${fixed ? "fixed" : "absolute"};
    width: ${width ? `${width}` : "auto"};
    opacity: ${shown ? "1" : "0"};
    border-radius: ${theme.orbit.borderRadiusNormal};
    box-shadow: ${theme.orbit.boxShadowRaised};
    ${resolvePopoverPosition}
    ${resolvePopoverHorizontal}
    &:focus {
      outline: 0;
    }
  `}
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverParent.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverPadding = styled.div`
  padding: ${({ noPadding, theme }) => (noPadding ? 0 : popoverPadding(theme))};
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverPadding.defaultProps = {
  theme: defaultTheme,
};

const StyledPopoverContent = styled.div``;

const StyledPopoverClose = styled.div`
  padding: ${({ theme }) => popoverPadding(theme)};
  display: none;
  visibility: hidden;
  padding-bottom: 0;
`;

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledPopoverClose.defaultProps = {
  theme: defaultTheme,
};

const PopoverContentWrapperDesktop = ({
  children,
  offset,
  onClose,
  width,
  dataTest,
  preferredPosition,
  preferredAlign,
  containerRef,
  noPadding,
  overlapped,
  shown,
  fixed,
  actions,
}: Props): React.Node => {
  const { isInsideModal } = React.useContext(ModalContext);
  const popover: {| current: React.ElementRef<*> |} = React.useRef(null);
  const content: {| current: React.ElementRef<*> |} = React.useRef(null);
  const intervalRef = React.useRef(null);
  const position = calculatePopoverPosition(preferredPosition, preferredAlign);
  const scrollableParent = React.useMemo(() => getScrollableParent(containerRef.current), [
    containerRef,
  ]);

  const dimensions = useDimensions({
    containerRef,
    popover,
    content,
    fixed,
    scrollableParent,
    children,
  });

  const verticalPosition = calculateVerticalPosition(position[0], dimensions);
  const horizontalPosition = calculateHorizontalPosition(position[1], dimensions);
  const [actionsDimensions, setActionsDimensions] = React.useState(0);
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const measuredRef = React.useCallback(
    node => {
      if (node !== null) {
        const timer = setTimeout(() => {
          setActionsDimensions(boundingClientRect({ current: node }));
        }, 15);
        intervalRef.current = timer;
      }
    },
    // this measures the element that's containing actions
    // so it needs to be re-measured every time actions change
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [actions],
  );

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (popover.current) {
        popover.current.focus();
      }
    }, 100);
    return () => {
      clearTimeout(timer);
      clearTimeout(intervalRef.current);
    };
  }, []);

  useClickOutside(popover, onClose);

  const handleKeyDown = (ev: SyntheticKeyboardEvent<HTMLDivElement>) => {
    if (ev.keyCode === 27 && onClose) onClose(ev);
  };

  return (
    <>
      <StyledPopoverParent
        shown={shown && verticalPosition && horizontalPosition}
        anchor={horizontalPosition}
        position={verticalPosition}
        containerTop={dimensions.containerTop}
        containerLeft={dimensions.containerLeft}
        containerPureTop={dimensions.containerPureTop}
        containerHeight={dimensions.containerHeight}
        containerWidth={dimensions.containerWidth}
        popoverHeight={dimensions.popoverHeight}
        popoverWidth={dimensions.popoverWidth}
        width={width}
        ref={popover}
        tabIndex="0"
        offset={offset}
        data-test={dataTest}
        noPadding={noPadding}
        overlapped={overlapped}
        role="tooltip"
        onKeyDown={handleKeyDown}
        fixed={fixed}
        isInsideModal={isInsideModal}
      >
        <StyledPopoverContent ref={content}>
          <StyledContentWrapper
            actionsHeight={actionsDimensions ? actionsDimensions.height : 0}
            windowHeight={windowHeight}
          >
            <StyledPopoverPadding noPadding={noPadding}>{children}</StyledPopoverPadding>
          </StyledContentWrapper>

          {actions ? (
            <StyledActions ref={measuredRef}>{actions}</StyledActions>
          ) : (
            <StyledPopoverClose ref={measuredRef}>
              <Button type="secondary" fullWidth onClick={onClose}>
                <Translate tKey="button_close" />
              </Button>
            </StyledPopoverClose>
          )}
        </StyledPopoverContent>
      </StyledPopoverParent>
    </>
  );
};

export default PopoverContentWrapperDesktop;
