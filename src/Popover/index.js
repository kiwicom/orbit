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
  open,
  width,
}: Props) => {
  const [shown, setShown] = useState<boolean>(false);
  const container: { current: any | HTMLDivElement } = useRef<HTMLDivElement>(null);

  const handleOut = () => {
    // If open prop is present ignore custom handler
    if (open === undefined) {
      setShown(false);
    }
  };

  const handleClick = () => {
    // If open prop is present ignore custom handler
    if (open === undefined) {
      setShown(!shown);
    }
  };

  return (
    <React.Fragment>
      <StyledPopoverChild onClick={handleClick} ref={container}>
        {children}
      </StyledPopoverChild>
      {(shown || open) && (
        <Portal element="popovers">
          <PopoverContentWrapper
            width={width}
            containerRef={container.current}
            preferredPosition={preferredPosition}
            onClose={handleOut}
            dataTest={dataTest}
          >
            {content}
          </PopoverContentWrapper>
        </Portal>
      )}
    </React.Fragment>
  );
};

export default Popover;
