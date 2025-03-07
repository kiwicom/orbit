import * as React from "react";
import cx from "clsx";
import { autoUpdate, useFloating, offset } from "@floating-ui/react";

import useClickOutside from "../../hooks/useClickOutside";
import KEY_CODE_MAP from "../../common/keyMaps";
import type { Props } from "./types";
import useMediaQuery from "../../hooks/useMediaQuery";

const ErrorFormTooltip = ({
  onShown,
  dataTest,
  children,
  shown,
  referenceElement,
  inlineLabel,
  isHelp = false,
  id,
}: Props) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const { isDesktop } = useMediaQuery();

  const { refs, floatingStyles, elements } = useFloating({
    placement: "top-start",
    whileElementsMounted: autoUpdate,
    onOpenChange: onShown,
    elements: {
      reference: referenceElement?.current,
    },
    middleware: [
      offset({
        mainAxis: 3,
        crossAxis: inlineLabel || isDesktop ? 0 : 4,
      }),
    ],
  });

  useClickOutside(refs.floating, () => {
    onShown(false);
  });

  React.useEffect(() => {
    const link = elements.floating?.querySelector("a");
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
  }, [onShown, isHelp, elements.floating]);

  const cssVars = {
    "--error-form-tooltip-position": floatingStyles.position,
    "--error-form-tooltip-top": floatingStyles.top,
    "--error-form-tooltip-left": floatingStyles.left,
    "--error-form-tooltip-right": floatingStyles.right,
    "--error-form-tooltip-bottom": floatingStyles.bottom,
    "--error-form-tooltip-transform": floatingStyles.transform,
  };

  return (
    <div
      id={id}
      ref={refs.setFloating}
      aria-live="polite"
      aria-hidden={!shown}
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
          "start-200 bottom-50 absolute rtl:start-0",
          inlineLabel && "rtl:start-0",
          isHelp ? "before:bg-blue-normal" : "before:bg-red-normal",
          "before:size-200 before:absolute before:-translate-x-1/2 before:-translate-y-1/2 before:rotate-45",
        )}
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
    </div>
  );
};

export default ErrorFormTooltip;
