import * as React from "react";
import styled from "styled-components";

import useStateWithTimeout from "../hooks/useStateWithTimeout";
import useTheme from "../hooks/useTheme";
import { PLACEMENTS } from "../common/consts";
import PopoverContent from "./components/ContentWrapper";
import Portal from "../Portal";
import handleKeyDown from "../utils/handleKeyDown";
import { Props } from "./index.d";

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  renderInPortal = true,
  opened,
  content,
  onClose,
  id,
  onOpen,
  offset,
  placement = PLACEMENTS.BOTTOM_START,
  fixed,
  lockScrolling = true,
  noFlip,
  allowOverflow,
  noPadding,
  width,
  actions,
  overlapped,
  dataTest,
}: Props) => {
  const ref = React.useRef<HTMLDivElement | null>(null);

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
    (ev: React.SyntheticEvent<HTMLElement>) => {
      // If open prop is present ignore custom handler
      // $FlowFixMe: TODO
      if (ref.current && !ref.current.contains(ev.currentTarget)) {
        if (typeof opened === "undefined") {
          setShown(false);
          clearShownTimeout();
          setRenderWithTimeout(false);
          resolveCallback(false);
        } else if (onClose) onClose();
      }
    },
    [clearShownTimeout, onClose, opened, resolveCallback, setRenderWithTimeout, setShown],
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
      id={id}
      dataTest={dataTest}
      overlapped={overlapped}
      fixed={fixed}
      noFlip={noFlip}
      allowOverflow={allowOverflow}
      lockScrolling={lockScrolling}
      noPadding={noPadding}
      actions={actions}
      width={width}
      offset={offset}
      referenceElement={ref.current}
      onClose={handleOut}
      placement={placement}
    >
      {content}
    </PopoverContent>
  );

  return (
    <>
      <StyledPopoverChild
        ref={ref}
        onClick={handleClick}
        onKeyDown={handleKeyDown<HTMLDivElement>(handleClick)}
      >
        {children}
      </StyledPopoverChild>
      {render && (renderInPortal ? <Portal renderInto="popovers">{popover}</Portal> : popover)}
    </>
  );
};

export default Popover;
