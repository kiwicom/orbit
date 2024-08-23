import * as React from "react";
import cx from "clsx";
import { usePopper } from "react-popper";

import useClickOutside from "../../hooks/useClickOutside";
import KEY_CODE_MAP from "../../common/keyMaps";
import handleKeyDown from "../../utils/handleKeyDown";
import CloseIcon from "../../icons/Close";
import useTheme from "../../hooks/useTheme";
import type { Props } from "./types";
import useMediaQuery from "../../hooks/useMediaQuery";

const ErrorFormTooltip = ({
  onShown,
  dataTest,
  helpClosable,
  children,
  shown,
  referenceElement,
  inlineLabel,
  isHelp = false,
  id,
}: Props) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLDivElement | null>(null);
  const { rtl } = useTheme();
  const { isDesktop } = useMediaQuery();

  const {
    styles,
    attributes: attrs,
    update,
  } = usePopper(referenceElement?.current, tooltipRef.current, {
    placement: rtl ? "top-end" : "top-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [inlineLabel || isDesktop ? 0 : 4, 3],
        },
      },
      {
        name: "flip",
        enabled: false,
      },
      {
        name: "arrow",
        options: {
          element: arrowRef,
        },
      },
      {
        name: "eventListeners",
        options: {
          scroll: false,
        },
      },
    ],
  });

  const { popper } = styles;

  useClickOutside(tooltipRef, () => {
    onShown(false);
  });

  React.useEffect(() => {
    if (update) update();
  }, [update, shown]);

  React.useEffect(() => {
    const link = tooltipRef.current?.querySelector("a");
    const handleTab = ev => {
      if (isHelp) return;
      if (ev.keyCode === KEY_CODE_MAP.TAB && link) {
        onShown(true);
        if (document.activeElement === link) {
          onShown(false);
        }
      } else {
        onShown(false);
      }
    };

    window.addEventListener("keydown", handleTab);
    return () => {
      window.removeEventListener("keydown", handleTab);
    };
  }, [onShown, isHelp, helpClosable]);

  const isVertical =
    attrs.popper &&
    (attrs.popper["data-popper-placement"] === "top-start" ||
      attrs.popper["data-popper-placement"] === "top-end")
      ? "bottom"
      : "top";

  const cssVars = {
    "--error-form-tooltip-position": popper.position,
    "--error-form-tooltip-top": popper.top,
    "--error-form-tooltip-left": popper.left,
    "--error-form-tooltip-right": popper.right,
    "--error-form-tooltip-bottom": popper.bottom,
    "--error-form-tooltip-transform": popper.transform,
  };

  return (
    <div
      id={id}
      ref={tooltipRef}
      aria-live="polite"
      data-test={dataTest}
      className={cx(
        "flex justify-between overflow-visible",
        "rounded-150 py-200 px-300 z-10 box-border",
        "max-h-none w-[min(calc(100%-20px),_100vw)]",
        isHelp ? "pe-300 bg-blue-normal" : "bg-red-normal",
        shown ? "visible opacity-100" : "invisible opacity-0",
        "duration-fast transition-[opacity,visibility] ease-in-out",
        "bottom-[var(--error-form-tooltip-bottom)] left-[var(--error-form-tooltip-left)] right-[var(--error-form-tooltip-right)] top-[var(--error-form-tooltip-top)] [position:var(--error-form-tooltip-position)] [transform:var(--error-form-tooltip-transform)]",
        "lm:w-auto tb:rounded-100",
        "[&>img]:max-w-full",
      )}
      style={cssVars as React.CSSProperties}
    >
      <div
        className={cx(
          "start-200 rtl:de:start-0 absolute",
          isVertical ? "bottom-50" : "top-50",
          inlineLabel && "rtl:start-0",
          isHelp ? "before:bg-blue-normal" : "before:bg-red-normal",
          "before:size-200 before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45",
        )}
        ref={setArrowRef}
      />
      <div
        className={cx(
          "font-base text-normal text-white-normal flex h-full items-center font-normal leading-normal",
          "[&_.orbit-text]:text-white-normal [&_.orbit-text]:text-normal hover:[&_.orbit-text]:text-white-normal focus:[&_.orbit-text]:text-white-normal [&_.orbit-text]:font-normal",
          "[&_.orbit-list-item]:text-white-normal [&_.orbit-list-item]:text-normal hover:[&_.orbit-list-item]:text-white-normal focus:[&_.orbit-list-item]:text-white-normal [&_.orbit-list-item]:font-normal",
          "[&_a]:text-white-normal [&_a]:text-normal hover:[&_a]:text-white-normal focus:[&_a]:text-white-normal [&_a]:font-normal",
        )}
        ref={contentRef}
      >
        {children}
      </div>
      {isHelp && helpClosable && (
        <button
          type="button"
          className="text-white-normal ms-300 flex cursor-pointer"
          tabIndex={0}
          // @ts-expect-error TODO
          onKeyDown={handleKeyDown<HTMLAnchorElement>(onShown)}
          onClick={ev => {
            ev.preventDefault();
            if (shown) onShown(false);
          }}
        >
          <CloseIcon ariaLabel="close" />
        </button>
      )}
    </div>
  );
};

export default ErrorFormTooltip;
