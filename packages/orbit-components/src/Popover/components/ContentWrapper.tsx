"use client";

import * as React from "react";
import { usePopper } from "react-popper";
import type { Placement } from "@popperjs/core/lib/enums";
import cx from "clsx";

import type * as Common from "../../common/types";
import Button from "../../Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import useClickOutside from "../../hooks/useClickOutside";
import useLockScrolling from "../../hooks/useLockScrolling";
import { ModalContext } from "../../Modal/ModalContext";
import { PLACEMENTS } from "../../common/consts";
import boundingClientRect from "../../utils/boundingClientRect";
import type { Offset } from "../types";

export interface Props extends Common.Globals {
  children: React.ReactNode;
  referenceElement: HTMLElement | null;
  placement: Placement;
  width?: string;
  zIndex?: number;
  maxHeight?: string;
  noFlip?: boolean;
  allowOverflow?: boolean;
  noPadding?: boolean;
  overlapped?: boolean;
  shown: boolean;
  fixed?: boolean;
  labelClose?: React.ReactNode;
  lockScrolling?: boolean;
  actions?: React.ReactNode;
  offset?: Offset;
  onClose: (ev?: MouseEvent | React.SyntheticEvent<HTMLElement>) => void;
}

const PopoverContentWrapper = ({
  children,
  onClose,
  zIndex = 710,
  labelClose,
  width,
  maxHeight,
  noFlip,
  offset = { top: 4, left: 0 },
  referenceElement,
  dataTest,
  id,
  placement = PLACEMENTS.BOTTOM_START,
  noPadding,
  overlapped,
  shown,
  fixed,
  allowOverflow,
  lockScrolling = true,
  actions,
}: Props) => {
  const [actionsHeight, setActionsHeight] = React.useState<number | null>(null);
  const { isInsideModal } = React.useContext(ModalContext);
  const { isLargeMobile } = useMediaQuery();
  const actionsRef = React.useRef<HTMLDivElement | null>(null);
  const content = React.useRef<HTMLDivElement | null>(null);
  const scrollingElementRef = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(scrollingElementRef, lockScrolling && !isLargeMobile);

  const popoverRef = React.useRef<HTMLDivElement | null>(null);
  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  const { styles, update } = usePopper(referenceElement, popoverRef.current, {
    placement,
    strategy: fixed ? "fixed" : "absolute",
    modifiers: [
      {
        name: "offset",
        enabled: !!offset,
        options: {
          offset: [offset.left, overlapped ? -Number(referenceElement?.offsetHeight) : offset.top],
        },
      },
      {
        name: "flip",
        enabled: !noFlip,
      },
      { name: "preventOverflow", enabled: !allowOverflow },
    ],
  });

  const { popper } = styles;

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (popoverRef.current) {
        popoverRef.current.focus();
      }
    }, 100);

    if (update) update();

    if (actionsRef.current) {
      const { height } = boundingClientRect({ current: actionsRef.current });
      setActionsHeight(height);
    }

    const handleKeyDown = (ev: KeyboardEvent) => {
      if (ev.code === "Escape" && onClose) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [update, actions, setActionsHeight, onClose]);

  useClickOutside(content, ev => {
    if (isLargeMobile) onClose(ev);
  });

  const cssVars = {
    "--popper-top": popper.top,
    "--popper-left": popper.left,
    "--popper-right": popper.right,
    "--popper-bottom": popper.bottom,
    "--popper-transform": popper.transform,
    "--popper-position": popper.position,
    "--popover-zIndex": zIndex,
    "--popover-width": width,
  } as React.CSSProperties;

  return (
    <>
      <div
        role="presentation"
        className={cx(
          "block",
          "fixed",
          "inset-x-0 top-0",
          "h-full w-full",
          // TODO: use bg-ink-dark/60 tw class
          "bg-[rgba(37,42,49,.6)]",
          "duration-normal transition-[opacity,transform] ease-in-out",
          "z-[999]",
          "lm:hidden",
          shown ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        role="dialog"
        // @ts-expect-error expected
        // eslint-disable-next-line react/no-unknown-property
        popover
        ref={popoverRef}
        data-test={dataTest}
        id={id}
        className={cx(
          "fixed",
          "inset-x-0 bottom-0",
          "h-auto w-full",
          "z-[1000]",
          "box-border",
          "shadow-raised-reverse",
          "bg-elevation-raised-reverse",
          "max-h-[calc(100%_-_theme(spacing.xl))]",
          "focus:outline-none",
          "lm:top-[var(--popper-top)]",
          "lm:left-[var(--popper-left)]",
          "lm:right-[var(--popper-right)]",
          "lm:bottom-[var(--popper-bottom)]",
          "lm:[position:var(--popper-position)]",
          "lm:[transform:var(--popper-transform)]",
          "lm:transition-[opacity] lm:duration-fast lm:ease-in-out",
          "lm:rounded-normal",
          "lm:shadow-raised",
          "lm:max-h-none",
          isInsideModal ? "lm:z-[1000]" : "lm:z-[var(--popover-zIndex)]",
          width ? "lm:w-[var(--popover-width)]" : "lm:w-auto",
          shown ? "lm:opacity-100" : "lm:opacity-0",
        )}
        style={cssVars}
      >
        <div
          ref={content}
          className={cx(
            shown ? "translate-y-0" : "translate-y-full",
            "will-change-transform",
            "duration-fast transition-[opacity,transform] ease-in-out",
            "lm:transform-none",
            "lm:transition-none",
          )}
        >
          <div
            ref={scrollingElementRef}
            className={cx(
              "overflow-auto",
              "rounded-t-modal-mobile",
              "absolute left-0",
              "w-full",
              "bg-white-normal",
              "bottom-[var(--actions-height)]",
              windowHeight &&
                actionsHeight &&
                "max-h-[calc(var(--window-height)-var(--actions-height)-32)]",
              noPadding ? "p-0" : "p-md",
              "lm:max-h-[var(--max-height)]",
              "lm:rounded-normal",
              "lm:bottom-auto",
              "lm:left-auto",
              "lm:relative",
            )}
            style={
              {
                "--actions-height": actionsHeight != null && `${actionsHeight}px`,
                "--window-height": windowHeight != null && `${windowHeight}px`,
                "--max-height": maxHeight != null ? `${maxHeight}px` : "100%",
              } as React.CSSProperties
            }
          >
            {children}
          </div>
          {actions ? (
            <div
              ref={actionsRef}
              className={cx(
                "fixed",
                "bottom-0 left-0",
                "w-full",
                "box-border",
                "p-md pt-sm",
                "bg-white-normal",
                "[&_.orbit-button-primitive]:w-full [&_.orbit-button-primitive]:flex-auto",
                "lm:relative",
                "lm:bottom-auto lm:left-auto",
                "lm:rounded-b-normal",
                "lm:[&_.orbit-button-primitive]:w-auto lm:[&_.orbit-button-primitive]:grow-0",
              )}
            >
              {actions}
            </div>
          ) : (
            <div ref={actionsRef} className="p-md lm:hidden lm:pb-0">
              <Button type="secondary" fullWidth onClick={onClose}>
                {labelClose}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PopoverContentWrapper;
