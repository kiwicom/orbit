import * as React from "react";
import cx from "clsx";
import { usePopper } from "react-popper";
import type { Placement } from "@popperjs/core/lib/enums";

import { PLACEMENTS } from "../../../common/consts";
import FOCUSABLE_ELEMENT_SELECTORS from "../../../hooks/useFocusTrap/consts";
import type { Props } from "./types";
import useTheme from "../../../hooks/useTheme";

const arrowPlacementClasses = {
  top: "bottom-0 left-[-6px] rtl:left-[6px]",
  left: "top-[-6px] rtl:right-[-6px] right-px",
  right: "top-[-6px] rtl:left-0 left-[-6px]",
  bottom: "top-[-6px] rtl:left-[6px] left-[-6px]",
  auto: "top-[-6px] rtl:left-[6px] left-[-6px]",
};

const arrowBorderClasses = {
  error: {
    top: "after:border-t-red-normal after:border-b-0",
    left: "after:border-l-red-normal after:border-r-0",
    right: "after:border-r-red-normal after:border-l-0",
    bottom: "after:border-b-red-normal after:border-t-0",
    auto: "after:border-b-red-normal after:border-t-0",
  },
  help: {
    top: "after:border-t-blue-normal after:border-b-0",
    left: "after:border-l-blue-normal after:border-r-0",
    right: "after:border-r-blue-normal after:border-l-0",
    bottom: "after:border-b-blue-normal after:border-t-0",
    auto: "after:border-b-blue-normal after:border-t-0",
  },
  top: "after:border-t-ink-dark after:border-b-0",
  left: "after:border-l-ink-dark after:border-r-0",
  right: "after:border-r-ink-dark after:border-l-0",
  bottom: "after:border-b-ink-dark after:border-t-0",
  auto: "after:border-b-ink-dark after:border-t-0",
};

const resolveArrowStyles = ({
  placement,
  error,
  help,
}: {
  placement?: Placement;
  error?: boolean;
  help?: boolean;
}): string => {
  if (placement) {
    const commonBorderClasses = "after:border-[6px] after:border-transparent";
    const formattedPlacement = placement.split("-")[0];
    const placementClasses = arrowPlacementClasses[formattedPlacement];

    if (error)
      return `${placementClasses} ${commonBorderClasses} ${arrowBorderClasses.error[formattedPlacement]}`;

    if (help)
      return `${placementClasses} ${commonBorderClasses} ${arrowBorderClasses.help[formattedPlacement]}`;

    return `${placementClasses} ${commonBorderClasses} ${arrowBorderClasses[formattedPlacement]}`;
  }

  return "";
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
  placement = PLACEMENTS.AUTO,
  noFlip,
  offset = [0, 5],
  referenceElement,
}: Props) => {
  const [tooltip, setTooltipRef] = React.useState<HTMLDivElement | null>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const [contentHeight, setContentHeight] = React.useState(0);
  const content = React.useRef<HTMLDivElement | null>(null);

  const {
    styles,
    attributes: attrs,
    update,
  } = usePopper(referenceElement, tooltip, {
    placement,
    modifiers: [
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
      {
        name: "offset",
        options: {
          offset,
        },
      },
      {
        name: "flip",
        enabled: !noFlip,
      },
    ],
  });

  React.useEffect(() => {
    if (update) update();
    if (content.current) setContentHeight(content.current.clientHeight);
  }, [update, setContentHeight]);

  const { popper, arrow } = styles;

  const theme = useTheme();

  const handleInnerClick = React.useCallback(
    ev => {
      if (tooltip) {
        const focusableElements = tooltip.querySelectorAll(FOCUSABLE_ELEMENT_SELECTORS);
        if (Object.values(focusableElements).some(v => v === ev.target)) {
          onClose();
          onCloseMobile();
        }
      }
    },
    [onClose, onCloseMobile, tooltip],
  );

  return (
    // Disabling because the onClick exists just to stop propagation of events
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <div className="w-full" role="tooltip" id={tooltipId} data-test={dataTest} onClick={onClick}>
      {/* Disabling because the onClick exists to close tooltip when clicking in interactibe elements, which should not happen with keyboard */}
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <div
        className={cx(
          "rounded-normal px-sm shadow-raised z-[10012] box-border block w-auto overflow-visible",
          "duration-fast transition-[visibility,_opacity] ease-in-out",
          "[&_img]:max-w-full]",
          contentHeight <= Math.floor(parseFloat(theme.orbit.lineHeightNormal)) ? "py-xs" : "py-sm",
          shown ? "visible opacity-100" : "invisible opacity-0",
          size === "small" && "max-w-[240px]",
          size === "medium" && "max-w-[380px]",
          error && "bg-red-normal",
          !error && help && "bg-blue-normal",
          !error && !help && "bg-ink-dark",
        )}
        ref={setTooltipRef}
        role="tooltip"
        aria-hidden={!shown}
        onMouseEnter={onEnter}
        onMouseLeave={onClose}
        onClick={handleInnerClick}
        style={{ ...popper }}
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
        <div
          className={cx(
            "after:absolute after:h-0 after:w-0 after:border-solid",
            resolveArrowStyles({
              error,
              help,
              placement: (attrs.popper && attrs.popper["data-popper-placement"]) as Placement,
            }),
          )}
          ref={setArrowRef}
          style={{ position: arrow.position, transform: arrow.transform }}
        />
      </div>
    </div>
  );
};

export default TooltipContent;
