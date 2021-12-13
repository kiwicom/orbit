// @flow
import * as React from "react";
import { useToaster, toast as notify } from "react-hot-toast";
import styled, { css } from "styled-components";

import Portal from "../Portal";
import Toast from "./Toast";
import defaultTheme from "../defaultTheme";
import { left, right } from "../utils/rtl";

import type { Props } from ".";

const StyledWrapper = styled.div`
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

// $FlowFixMe: https://github.com/flow-typed/flow-typed/issues/3653#issuecomment-568539198
StyledWrapper.defaultProps = {
  theme: defaultTheme,
};

const ToastInit = ({
  dataTest,
  topOffset = 8,
  leftOffset = 8,
  rightOffset = 8,
  bottomOffset = 8,
  gutter = 8,
  dismissTimeout = 5000,
  placement = "top-center",
}: Props): React.Node => {
  const { toasts, handlers } = useToaster({
    duration: dismissTimeout,
  });

  const { startPause, endPause, calculateOffset, updateHeight } = handlers;

  return (
    <Portal>
      <StyledWrapper
        data-test={dataTest}
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

          const ref = el => {
            if (el && !toast.height) {
              const { height } = el.getBoundingClientRect();
              updateHeight(toast.id, height);
            }
          };

          return (
            <Toast
              key={id}
              ref={ref}
              dismissTimeout={dismissTimeout}
              visible={visible}
              icon={icon}
              offset={offset}
              onMouseEnter={startPause}
              onMouseLeave={endPause}
              placement={placement}
              role={ariaProps.role}
              onDismiss={() => notify.dismiss(id)}
              ariaLive={ariaProps["aria-live"]}
            >
              {message}
            </Toast>
          );
        })}
      </StyledWrapper>
    </Portal>
  );
};

export default ToastInit;
