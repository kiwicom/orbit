"use client";

import * as React from "react";
import cx from "clsx";
import { useToaster, toast as notify } from "react-hot-toast";

import ToastMessage from "./ToastMessage";
import type { Props } from "./types";

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

  const { startPause, endPause, calculateOffset } = handlers;

  return (
    <div
      data-test={dataTest}
      id={wrapperId}
      className={cx(
        "z-onTop pointer-events-none fixed",
        "bottom-[var(--toast-root-bottom)] end-[var(--toast-root-end)] start-[var(--toast-root-start)] top-[var(--toast-root-top)]",
      )}
      style={
        {
          "--toast-root-top": `${topOffset}px`,
          "--toast-root-bottom": `${bottomOffset}px`,
          "--toast-root-start": `${leftOffset}px`,
          "--toast-root-end": `${rightOffset}px`,
        } as React.CSSProperties
      }
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
            onMouseEnter={startPause}
            onMouseLeave={endPause}
            placement={placement}
            onDismiss={notify.dismiss}
            ariaLive={ariaProps["aria-live"]}
            role={ariaProps.role}
          >
            {message as React.ReactNode}
          </ToastMessage>
        );
      })}
    </div>
  );
};

export default ToastRoot;
