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
  onClose,
  onOpen,
}: Props) => {
  const [shown, setShown] = useState<boolean>(false);
  const container: { current: React$ElementRef<*> } = useRef(null);

  const resolveCallback = () => {
    if (onClose && shown) onClose();
    if (onOpen && !shown) onOpen();
  };

  const handleOut = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(false);
      resolveCallback();
    }
  };

  const handleClick = () => {
    // If open prop is present ignore custom handler
    if (typeof opened === "undefined") {
      setShown(!shown);
      resolveCallback();
    }
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
            containerRef={container.current}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            dataTest={dataTest}
            noPadding={noPadding}
          >
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Popover;
