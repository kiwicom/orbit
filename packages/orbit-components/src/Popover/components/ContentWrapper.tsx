"use client";

import * as React from "react";
import cx from "clsx";
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  autoPlacement,
  FloatingFocusManager,
} from "@floating-ui/react";

import type * as Common from "../../common/types";
import Button from "../../Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import useClickOutside from "../../hooks/useClickOutside";
import useLockScrolling from "../../hooks/useLockScrolling";
import { ModalContext } from "../../Modal/ModalContext";
import boundingClientRect from "../../utils/boundingClientRect";
import type { Offset } from "../types";
import {
  type Placement,
  getAutoAlignment,
  isFixedPlacement,
  PLACEMENTS,
} from "../../common/placements";

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
  ariaLabel?: string;
  ariaLabelledby?: string;
}

const PopoverContentWrapper = ({
  children,
  onClose,
  zIndex = 710,
  labelClose,
  width,
  maxHeight,
  noFlip,
  offset: offsetProp = { top: 4, left: 0 },
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
  ariaLabelledby,
  ariaLabel,
}: Props) => {
  const [actionsHeight, setActionsHeight] = React.useState<number | null>(null);
  const { isInsideModal } = React.useContext(ModalContext);
  const { isLargeMobile } = useMediaQuery();
  const actionsRef = React.useRef<HTMLDivElement | null>(null);
  const content = React.useRef<HTMLDivElement | null>(null);
  const scrollingElementRef = React.useRef<HTMLDivElement | null>(null);
  useLockScrolling(scrollingElementRef, lockScrolling && !isLargeMobile);

  const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

  const isAutoPlacement = !isFixedPlacement(placement);

  const { refs, floatingStyles, context, elements } = useFloating({
    placement: isAutoPlacement ? undefined : placement,
    strategy: fixed ? "fixed" : "absolute",
    whileElementsMounted: autoUpdate,
    elements: {
      reference: referenceElement,
    },
    middleware: [
      offset({
        mainAxis: overlapped ? -Number(referenceElement?.offsetHeight) : offsetProp.top,
        crossAxis: offsetProp.left,
      }),
      isAutoPlacement &&
        autoPlacement({
          alignment: getAutoAlignment(placement),
          autoAlignment: !noFlip,
        }),
      !noFlip && !isAutoPlacement && flip(),
      !allowOverflow && shift(),
    ],
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      if (elements.floating) {
        elements.floating.focus();
      }
    }, 100);

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
  }, [actions, setActionsHeight, onClose, elements.floating]);

  useClickOutside(
    content,
    ev => {
      if (isLargeMobile) onClose(ev);
    },
    "click",
  );

  const cssVars = {
    "--popover-top": floatingStyles.top ?? 0,
    "--popover-left": floatingStyles.left ?? 0,
    "--popover-right": floatingStyles.right ?? "auto",
    "--popover-bottom": floatingStyles.bottom ?? "auto",
    "--popover-transform": floatingStyles.transform,
    "--popover-position": floatingStyles.position,
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
          "size-full",
          "bg-ink-dark/60",
          "duration-normal transition-[opacity,transform] ease-in-out",
          "z-[999]",
          "lm:hidden",
          shown ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <FloatingFocusManager context={context}>
        <div
          role="dialog"
          // @ts-expect-error expected
          // eslint-disable-next-line react/no-unknown-property
          popover
          ref={refs.setFloating}
          data-test={dataTest}
          id={id}
          className={cx(
            "fixed",
            "inset-x-0 bottom-0",
            "h-auto w-full",
            "z-[1000]",
            "box-border",
            "shadow-level3-reverse",
            "bg-white-normal",
            "max-h-[calc(100%_-_theme(spacing.800))]",
            "focus:outline-none",
            "lm:top-[var(--popover-top)]",
            "lm:left-[var(--popover-left)]",
            "lm:right-[var(--popover-right)]",
            "lm:bottom-[var(--popover-bottom)]",
            "lm:[position:var(--popover-position)]",
            "lm:[transform:var(--popover-transform)]",
            "lm:transition-opacity lm:duration-fast lm:ease-in-out",
            "lm:rounded-100",
            "lm:shadow-level3",
            "lm:max-h-none",
            isInsideModal ? "lm:z-[1000]" : "lm:z-[var(--popover-zIndex)]",
            width ? "lm:w-[var(--popover-width)]" : "lm:w-auto",
            shown ? "lm:opacity-100" : "lm:opacity-0",
          )}
          style={cssVars}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
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
                "rounded-t-modal",
                "absolute left-0",
                "w-full",
                "bg-white-normal",
                "bottom-[var(--actions-height)]",
                windowHeight &&
                  actionsHeight &&
                  "max-h-[calc(var(--window-height)-var(--actions-height)-32px)]",
                noPadding ? "p-0" : "p-400",
                "lm:max-h-[var(--max-height)]",
                "lm:rounded-100",
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
                  "p-400 pt-300",
                  "bg-white-normal",
                  "[&_.orbit-button-primitive]:w-full [&_.orbit-button-primitive]:flex-auto",
                  "lm:relative",
                  "lm:bottom-auto lm:left-auto",
                  "lm:rounded-b-100",
                  "lm:[&_.orbit-button-primitive]:w-auto lm:[&_.orbit-button-primitive]:grow-0",
                )}
              >
                {actions}
              </div>
            ) : (
              <div ref={actionsRef} className="p-400 lm:hidden lm:pb-0">
                <Button type="secondary" fullWidth onClick={onClose}>
                  {labelClose}
                </Button>
              </div>
            )}
          </div>
        </div>
      </FloatingFocusManager>
    </>
  );
};

export default PopoverContentWrapper;
