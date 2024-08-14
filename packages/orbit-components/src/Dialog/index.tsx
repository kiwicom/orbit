"use client";

import * as React from "react";
import cx from "clsx";

import useFocusTrap from "../hooks/useFocusTrap";
import Portal from "../Portal";
import useTheme from "../hooks/useTheme";
import Heading from "../Heading";
import Text from "../Text";
import Stack from "../Stack";
import useLockScrolling from "../hooks/useLockScrolling";
import KEY_CODE_MAP from "../common/keyMaps";
import useClickOutside from "../hooks/useClickOutside";
import useRandomId from "../hooks/useRandomId";
import type { Props } from "./types";

const ActionButtonWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lm:w-auto lm:[&>button]:flex-none lm:[&>button]:w-auto w-full [&>button]:w-full [&>button]:flex-auto">
      {children}
    </div>
  );
};

const Dialog = ({
  dataTest,
  id,
  title,
  description,
  primaryAction,
  secondaryAction,
  onClose,
  maxWidth,
  renderInPortal = true,
  illustration,
  lockScrolling = true,
}: Props) => {
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(wrapperRef, lockScrolling);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const theme = useTheme();
  const [shown, setShown] = React.useState(false);

  useFocusTrap(ref);

  React.useEffect(() => {
    const transitionLength = parseFloat(theme.orbit.durationFast) * 1000;
    const timer = setTimeout(() => {
      setShown(true);
      if (ref.current) {
        ref.current.focus();
      }
    }, transitionLength);

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.keyCode === KEY_CODE_MAP.ESC && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [theme.orbit.durationFast, onClose]);

  const handleClose = (ev: MouseEvent) => {
    if (ref && ref.current && onClose) {
      if (ref.current && !ref.current.contains(ev.target as Node)) onClose();
    }
  };

  useClickOutside(ref, handleClose);

  const dialogID = useRandomId();
  const descriptionId = useRandomId();

  const dialog = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={dialogID}
      aria-describedby={descriptionId}
      ref={wrapperRef}
      data-test={dataTest}
      id={id}
      className={cx([
        "font-base",
        "size-full",
        "p-400 z-overlay box-border overflow-x-hidden bg-[rgba(0,0,0,0.5)]",
        "fixed inset-0",
        "duration-fast transition-opacity ease-in-out",
        "lm:opacity-100 lm:flex lm:items-center lm:justify-center",
      ])}
    >
      <div className="flex min-h-full items-center">
        <div
          id={dialogID}
          ref={ref}
          style={{ maxWidth }}
          className={cx([
            "shadow-level4 pt-600 px-400 pb-400 bg-white-normal rounded-dialog-mobile box-border block w-full",
            shown ? "bottom-0" : "-bottom-full",
            "lm:min-w-dialog-width lm:p-600 lm:rounded-dialog-desktop",
          ])}
        >
          {illustration && <div className="mb-400 lm:text-start text-center">{illustration}</div>}
          <div className="mb-400 gap-200 lm:text-start lm:[&>.orbit-text]:text-start flex flex-col text-center [&>.orbit-text]:text-center">
            {title && (
              <Heading type="title3" align="center" largeMobile={{ align: "start" }}>
                {title}
              </Heading>
            )}
            {description && (
              <Text type="secondary" id={descriptionId}>
                {description}
              </Text>
            )}
          </div>
          <Stack
            direction="column-reverse"
            spacing="200"
            largeMobile={{ direction: "row", justify: "end" }}
          >
            {secondaryAction && <ActionButtonWrapper>{secondaryAction}</ActionButtonWrapper>}
            <ActionButtonWrapper>{primaryAction}</ActionButtonWrapper>
          </Stack>
        </div>
      </div>
    </div>
  );

  return renderInPortal ? <Portal renderInto="modals">{dialog}</Portal> : dialog;
};

export default Dialog;
