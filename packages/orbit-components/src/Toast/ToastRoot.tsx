import * as React from "react";
import { useToaster, toast as notify } from "react-hot-toast";
import styled, { css } from "styled-components";

import ToastMessage from "./ToastMessage";
import defaultTheme from "../defaultTheme";
import { left, right } from "../utils/rtl";
import { Props } from "./index.d";

const StyledWrapper = styled.div<{ $top: number; $left: number; $right: number; $bottom: number }>`
  ${({ theme, $top, $left, $right, $bottom }) => css`
    position: fixed;
    z-index: ${theme.orbit.zIndexOnTheTop};
    pointer-events: none;
    top: ${$top}px;
    bottom: ${$bottom}px;
    ${left}: ${$left}px;
    ${right}: ${$right}px;
  `}
`;

StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ToastRoot = ({
  dataTest,
  id: wrapperId,
  topOffset = 8,
  leftOffset = 8,
  rightOffset = 8,
  bottomOffset = 8,
  gutter = 8,
  dismissTimeout = 5000,
  placement = "top-center",
}: Props) => {
  const { toasts, handlers } = useToaster({
    duration: dismissTimeout,
  });

  const { startPause, endPause, calculateOffset, updateHeight } = handlers;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleUpdateHeight = React.useCallback(updateHeight, []);

  return (
    <StyledWrapper
      data-test={dataTest}
      id={wrapperId}
      $top={topOffset}
      $bottom={bottomOffset}
      $left={leftOffset}
      $right={rightOffset}
    >
      {toasts.map(toast => {
        const { id, message, ariaProps, visible, icon } = toast;

        const offset = calculateOffset(toast, {
          gutter,
        });

        return (
          <ToastMessage
            key={id}
            id={id}
            dismissTimeout={dismissTimeout}
            visible={visible}
            icon={icon}
            offset={offset}
            onUpdateHeight={handleUpdateHeight}
            onMouseEnter={startPause}
            onMouseLeave={endPause}
            placement={placement}
            onDismiss={notify.dismiss}
            ariaLive={ariaProps["aria-live"]}
          >
            {message}
          </ToastMessage>
        );
      })}
    </StyledWrapper>
  );
};

export default ToastRoot;
