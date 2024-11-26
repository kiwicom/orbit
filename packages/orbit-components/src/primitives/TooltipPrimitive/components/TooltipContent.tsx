import * as React from "react";
import cx from "clsx";
import {
  useFloating,
  offset,
  flip,
  autoPlacement,
  arrow,
  FloatingArrow,
  autoUpdate,
  shift,
} from "@floating-ui/react";

import { AUTO_PLACEMENTS, getAutoAlignment, isFixedPlacement } from "../../../common/placements";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import type { Props } from "./types";
import useTheme from "../../../hooks/useTheme";
import type { Theme } from "../../../defaultTheme";

const ARROW_SIZE = 6;

const getArrowColor = ({
  error,
  help,
  theme,
}: {
  error: Props["error"];
  help: Props["help"];
  theme: Theme;
}) => {
  if (error) return theme.orbit.paletteRedNormal;
  if (help) return theme.orbit.paletteBlueNormal;
  return theme.orbit.paletteInkDark;
};

const TooltipContent = ({
  dataTest,
  shown,
  size,
  tooltipId,
  error,
  help,
  children,
  onClick,
  onClose,
  onCloseMobile,
  onEnter,
  placement = AUTO_PLACEMENTS.AUTO,
  noFlip,
  offset: offsetProp = [0, 5],
  referenceElement,
}: Props) => {
  const arrowRef = React.useRef<null | SVGSVGElement>(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const content = React.useRef<HTMLDivElement | null>(null);

  const isAutoPlacement = !isFixedPlacement(placement);

  const { refs, floatingStyles, context, elements } = useFloating({
    placement: isAutoPlacement ? undefined : placement,
    elements: {
      reference: referenceElement,
    },
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: offsetProp[0] + ARROW_SIZE,
        crossAxis: offsetProp[1] - ARROW_SIZE,
      }),
      !noFlip &&
        !isAutoPlacement &&
        flip({
          fallbackAxisSideDirection: "start",
          crossAxis: false,
        }),
      isAutoPlacement &&
        autoPlacement({
          alignment: getAutoAlignment(placement),
          autoAlignment: !noFlip,
        }),
      shift(),
      arrow({
        element: arrowRef,
      }),
    ],
  });

  React.useEffect(() => {
    if (content.current) setContentHeight(content.current.clientHeight);
  }, [setContentHeight]);

  const theme = useTheme();
  const arrowColor = getArrowColor({ error, help, theme });

  const handleInnerClick = React.useCallback(
    ev => {
      if (elements.floating) {
        const focusableElements = elements.floating.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose();
          onCloseMobile();
        }
      }
    },
    [onClose, onCloseMobile, elements.floating],
  );

  const handleCombinedClick = (ev: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    handleInnerClick(ev);
    onClick(ev);
  };

  return (
    // Disabling because the onClick exists to close tooltip when clicking in interactive elements, which should not happen with keyboard.
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div
      className={cx(
        "rounded-100 px-300 shadow-level3 z-[10012] box-border block w-auto overflow-visible",
        "duration-fast transition-[visibility,_opacity] ease-in-out",
        "[&_img]:max-w-full]",
        contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightNormal)) ? "py-200" : "py-300",
        shown ? "visible opacity-100" : "invisible opacity-0",
        size === "small" && "max-w-[240px]",
        size === "medium" && "max-w-[380px]",
        error && "bg-red-normal",
        !error && help && "bg-blue-normal",
        !error && !help && "bg-ink-dark",
      )}
      ref={refs.setFloating}
      role="tooltip"
      id={tooltipId}
      aria-hidden={!shown}
      onMouseEnter={onEnter}
      onMouseLeave={onClose}
      onClick={handleCombinedClick}
      style={floatingStyles}
      data-test={dataTest}
    >
      <div
        className={cx(
          "font-base text-small text-white-normal mb-0 font-medium leading-normal",
          "[&_.orbit-text]:text-small [&_.orbit-text]:text-white-normal [&_.orbit-text]:font-medium",
          "[&_.orbit-list-item]:text-small [&_.orbit-list-item]:text-white-normal [&_.orbit-list-item]:font-medium",
          "[&_.orbit-text-link]:text-white-normal",
        )}
        ref={content}
      >
        {children}
      </div>
      <FloatingArrow
        ref={arrowRef}
        context={context}
        height={ARROW_SIZE}
        width={ARROW_SIZE * 2}
        fill={arrowColor}
      />
    </div>
  );
};

export default TooltipContent;
