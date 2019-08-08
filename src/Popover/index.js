// @flow
import React, { useState, useRef } from "react";
import styled from "styled-components";

import Portal from "../Portal";
import PopoverContentWrapper from "./components/ContentWrapper";
import type { Props } from "./index.js.flow";

const StyledPopoverChild = styled.div`
  position: relative;
`;

const Popover = ({
  children,
  content,
  preferredPosition = "bottom",
  dataTest,
  opened,
  width,
  noPadding,
  overlapped,
  onClose,
  onOpen,
}: Props) => {
  const [shown, setShown] = useState<boolean>(false);
  const container: { current: React$ElementRef<*> } = useRef(null);

  const resolveCallback = React.useCallback(() => {
    if (onClose && shown) onClose();
    if (onOpen && !shown) onOpen();
  }, [onClose, onOpen, shown]);

  const handleOut = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(false);
      resolveCallback();
    } else if (onClose) onClose();
  };

  const handleClick = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(!shown);
      resolveCallback();
    } else if (onOpen) onOpen();
  };

  return (
    <React.Fragment>
      <StyledPopoverChild onClick={handleClick} ref={container}>
        {children}
      </StyledPopoverChild>
      {(shown || opened) && (
        <Portal element="popovers">
          <PopoverContentWrapper
            width={width}
            containerRef={container}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            dataTest={dataTest}
            noPadding={noPadding}
            overlapped={overlapped}
          >
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Popover;
